import { NextResponse } from "next/server"

export async function GET(request) {
    //const url = 'https://jsonplaceholder.typicode.com/albums'
    const url = `${process.env.HOST_JSONPLACEHOLDER}/albums`
    const res = await fetch(url, { next: { revalidate: 60 } })
    const albums = await res.json();
    //send response
    return NextResponse.json(albums)
}