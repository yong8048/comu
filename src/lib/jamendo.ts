export async function fetchRandomTrack() {
  const res = await fetch("", { cache: "no-store" });
  const data = await res.json();
  return data.results;
}

//https://api.jamendo.com/v3.0/tracks/?client_id=255ae4b1&format=json&limit=10
