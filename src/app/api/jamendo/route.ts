import { NextResponse } from "next/server";

export async function GET() {
  const JAMENDO_CLIENT_ID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID;
  const apiUrl = `https://api.jamendo.com/v3.0/tracks/?client_id=${JAMENDO_CLIENT_ID}&format=json&limit=10`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return NextResponse.json(data);
}
