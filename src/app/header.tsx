"use client";

import { signIn, signOut, useSession} from "next-auth/react";


import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/ui/button";

export function Header() {
    const session = useSession();
    return (
        <header>
            <div>
                {session.data ? ( <Button onClick={() => signOut()}>Sign out</Button>): <Button onClick={() => signIn("google")}>Sign In</Button>}
                {session.data?.user?.name}
                <ModeToggle/>
            </div>
        </header>
    )
}