import { auth, signOut } from "@/lib/auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950 px-6 py-3 flex items-center justify-between">
      <Link href="/" className="text-zinc-100 font-semibold tracking-tight hover:text-white transition-colors">
        Home Server
      </Link>
      {session?.user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-400">
            {session.user.name ?? session.user.email}
          </span>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/api/auth/signin" });
            }}
          >
            <button
              type="submit"
              className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer"
            >
              Sign out
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}
