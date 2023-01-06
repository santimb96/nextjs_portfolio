import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (NextRequest) => {
  if (NextRequest.method === 'GET') {
    return NextResponse.next()
  }
  return new Response(null, { status: 405, message: 'Método no permitido' })
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico).*)']
}
