import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('accessToken')?.value;
  console.log("UserToken",userToken)
  if(!userToken ) {
     return NextResponse.redirect(new URL('/login',request.url))
  }
//   if(userToken && request.url === "http://localhost:3000/login") {
//     return NextResponse.redirect(new URL('/addExam',request.url))
//  }

}
export const config = {
    matcher: ['/addExam',"/addQuestion"],
  }