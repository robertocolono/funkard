export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://funkard-api.onrender.com";
  const res = await fetch(`${baseUrl}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Errore durante l'upload del file");
  }

  // Prova a leggere JSON, fallback a text
  try {
    const data = await res.json();
    if (typeof data === "string") return data.trim();
    if (data && typeof data.url === "string") return data.url;
    if (data && typeof data.imageUrl === "string") return data.imageUrl;
  } catch {
    // ignore
  }

  const imageUrl = (await res.text()).trim();
  return imageUrl;
}
