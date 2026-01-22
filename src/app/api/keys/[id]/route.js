import { getSupabaseClient } from "@/lib/supabaseClient";

const normalize = (row) => ({
  id: row.id,
  name: row.name,
  key: row.key,
  type: row.type || "dev",
  usage: row.usage ?? 0,
  createdAt: row.created_at,
});

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("api_key")
      .select("id, name, key, type, usage, created_at")
      .eq("id", id)
      .single();

    if (error) {
      return Response.json({ error: "API key not found" }, { status: 404 });
    }

    return Response.json(normalize(data));
  } catch (error) {
    return Response.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("api_key")
      .update({
        name: body.name,
        key: body.key,
        type: body.type || "dev",
      })
      .eq("id", id)
      .select("id, name, key, type, usage, created_at")
      .single();

    if (error) {
      return Response.json({ error: "API key not found" }, { status: 404 });
    }

    return Response.json(normalize(data));
  } catch (error) {
    return Response.json({ error: error.message || "Server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("api_key").delete().eq("id", id);

    if (error) {
      return Response.json({ error: "API key not found" }, { status: 404 });
    }

    return Response.json({ message: "API key deleted" });
  } catch (error) {
    return Response.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
