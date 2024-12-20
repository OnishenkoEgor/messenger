import {NextRequest, NextResponse} from "next/server"
import {authenticate} from "@/utils/auth/auth";

export  function middleware(request: NextRequest) {
    const authenticated = authenticate(request);

    if (authenticated) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ["/((?!login|_next|favicon).*)"],
}
