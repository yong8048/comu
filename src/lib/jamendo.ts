export async function fetchRandomTrack(
  tags: string = "motivational+synthesizer"
) {
  try {
    const response = await fetch(
      `/api/jamendo?tags=${encodeURIComponent(tags)}`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
