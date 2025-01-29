import {NextRequest, NextResponse} from "next/server"

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token');
    if (token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ["/((?!login|_next|favicon|logo).*)"],
}
