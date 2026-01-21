import { getSupabaseClient } from "@/lib/supabaseClient";

const normalize = (row) => ({
  id: row.id,
  name: row.name,
  key: row.key,
  type: row.type || "dev",
  usage: row.usage ?? 0,
  createdAt: row.created_at,
});

export async function GET() {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("api_key")
      .select("id, name, key, type, usage, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data.map(normalize));
  } catch (error) {
    console.error("API error:", error);
    return Response.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.key) {
      return Response.json({ error: "name and key are required" }, { status: 400 });
    }

    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("api_key")
      .insert([
        {
          name: body.name,
          key: body.key,
          type: body.type || "dev",
          usage: body.usage ?? 0,
        },
      ])
      .select("id, name, key, type, usage, created_at")
      .single();

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(normalize(data), { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
