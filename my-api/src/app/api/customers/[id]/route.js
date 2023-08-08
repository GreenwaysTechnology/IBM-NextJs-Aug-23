import { NextResponse } from "next/server"
//
export async function GET(request, { params }) {
    const customers = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }]
    const tmpCustomers = customers.filter(customer => { return customer.id === +params.id })
    return NextResponse.json(tmpCustomers)
}
//put or patch 
export async function PUT(request) {
    return NextResponse.json({ message: 'Update' })
}
export async function DELETE(request) {
    return NextResponse.json({ message: 'Delete' })
}
