import { NextResponse, NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/
const LOCALE_PATH_PATTERN = /^\/contact\/([^\/]+)(?:\/|$)/

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  const localeMatch = LOCALE_PATH_PATTERN.exec(url.pathname)
  if (localeMatch) {
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', localeMatch[1], { path: '/' })
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}