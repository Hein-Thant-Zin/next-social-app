import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT() {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;
}