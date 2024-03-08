import { getServerSession } from 'next-auth'
import { options } from '../../api/auth/[...nextauth]/options'
import { redirect } from "next/navigation";
const Member = async () => {
    const session = await getServerSession(options);

// if the user is not logged in, redirect them to the login page
    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/Member");
    }

    return (
        <div>
            <h1>must be logged in to view this page. if you are not logged in, you will be presented with a login screen</h1>
            <p>your email and role:</p>
            <p>{session?.user?.email}</p>
            <p>{session?.user?.role}</p>


        </div>
    );
};

export default Member;
