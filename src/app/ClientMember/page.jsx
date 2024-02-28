import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const ClientMember = async () => {
    const {data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/ClientMember");
        }
    });
    return (
        <div>
            <h1>member client session</h1>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.role}</p>
            <image>{session?.user?.image}</image>
        </div>
    );
}

export default ClientMember;
