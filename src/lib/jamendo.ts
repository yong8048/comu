export async function fetchRandomTrack() {
  try {
    const response = await fetch("/api/jamendo", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

//https://api.jamendo.com/v3.0/tracks/?client_id=255ae4b1&format=json&limit=10
