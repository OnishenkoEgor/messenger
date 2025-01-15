import {NextRequest, NextResponse} from "next/server"

export function middleware(request: NextRequest) {
    const authorized = false;
    if (authorized) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ["/((?!login|_next|favicon|logo).*)"],
}
