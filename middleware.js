import { NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (NextRequest) => {
  // console.warn(signIn('santiagomartinezbota@gmail.com', 'adminAdmin'))
  console.log(NextRequest.nextUrl.pathname)

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico).*)']
}
