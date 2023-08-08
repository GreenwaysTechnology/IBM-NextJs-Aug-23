
//GET  http://localhost:3000/api/customers/15

import { NextResponse } from "next/server";

//GET  http://localhost:3000/api/customers
export async function GET(request) {
    const customers = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    return NextResponse.json(customers)
}

//POST http://localhost:3000/api/customers
export async function POST(request) {
    return NextResponse.json({ message: 'Customer created' })
}

