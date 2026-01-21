// Simple in-memory storage
// In production, replace this with a database (e.g., PostgreSQL, MongoDB, etc.)
let apiKeys = [
  {
    id: "1",
    name: "default",
    key: "tvly-dev-1234567890abcdefghijklmnopqrstuv",
    type: "dev",
    usage: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "hello",
    key: "tvly-dev-abcdefghijklmnopqrstuvwxyz123456",
    type: "dev",
    usage: 0,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "cursor",
    key: "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",
    type: "dev",
    usage: 0,
    createdAt: new Date().toISOString(),
  },
];

export function getAllKeys() {
  return apiKeys;
}

export function getKeyById(id) {
  return apiKeys.find((k) => k.id === id);
}

export function createKey(keyData) {
  const newKey = {
    id: Date.now().toString(),
    name: keyData.name,
    key: keyData.key,
    type: keyData.type || "dev",
    usage: 0,
    createdAt: new Date().toISOString(),
  };
  apiKeys.push(newKey);
  return newKey;
}

export function updateKey(id, keyData) {
  const index = apiKeys.findIndex((k) => k.id === id);
  if (index === -1) return null;
  apiKeys[index] = {
    ...apiKeys[index],
    name: keyData.name,
    key: keyData.key,
    type: keyData.type || apiKeys[index].type || "dev",
  };
  return apiKeys[index];
}

export function deleteKey(id) {
  const index = apiKeys.findIndex((k) => k.id === id);
  if (index === -1) return false;
  apiKeys.splice(index, 1);
  return true;
}
