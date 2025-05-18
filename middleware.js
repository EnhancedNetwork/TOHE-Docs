import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const lowerPath = url.pathname.toLowerCase()

  if (url.pathname !== lowerPath) {
    url.pathname = lowerPath
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
