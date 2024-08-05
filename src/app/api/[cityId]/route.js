import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

  const { cityId } = params
  console.log(cityId);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityId}&appid=71058c5a10a8477c844a6a5b09276cc1&cnt=5`;
  
  console.log(url)
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return NextResponse.json({ data });
}