export { default } from "next-auth/middleware";

export const config = { matcher: ["/your-rooms", "/browse", "/edit-room"] };

// export { auth as middleware } from "./lib/auth"

