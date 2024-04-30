import { NextResponse } from "next/server"

// GET Api
export const GET = ()=> {
 return   NextResponse.json( {message: 'Hello world!!!!!!!!'})
}

// POST Api
export const POST = ( req, res)=> {
    return NextResponse
}

// PATCH Api
export const PATCH = ()=> {
    return NextResponse
}


// DELETE Api
export const DELETE = ()=> {
    return NextResponse
}