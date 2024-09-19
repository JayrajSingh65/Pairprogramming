"use client";

import { signIn, signOut, useSession} from "next-auth/react";
import { getServerSession } from "next-auth/next";

import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/ui/button";

export function Header() {
    const session = useSession();
    return (
        <header>
            <div>
                {session.data ? ( <Button onClick={() => signOut()}>Sign out</Button>): <Button onClick={() => signIn("google")}>Sign In</Button>}
                <ModeToggle/>
            </div>
        </header>
    )
}