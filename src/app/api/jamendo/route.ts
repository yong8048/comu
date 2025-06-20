import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const JAMENDO_CLIENT_ID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;
  const { searchParams } = new URL(request.url);
  const tags = searchParams.get("tags") || "ambient";
  const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=${JAMENDO_CLIENT_ID}&format=json&limit=25&order=popularity_week_desc&fuzzytags=${tags}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return NextResponse.json(data);
}
