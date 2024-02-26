import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
    const session = await getServerSession(options)
    return (
       
            <header className="bg-gray-600 text-gray-100">
                <nav className="flex justify-between items-center w-full px-10 py-4">
                    <div>Viper Rocks!</div>
                    <div className="flex gap-10">
                        <Link href="/">Home</Link>
                        <Link href="/pages/Forbidden">Forbidden</Link>
                        <Link href="/pages/Member">Member</Link>
                        <Link href="/pages/Public">Public</Link>
                        {session ? (
                            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
                         ) : (
                            <div className="flex gap-10">
                            <Link href="/api/auth/signin">Login</Link> 
                            <Link href="/pages/CreateUser">Signup</Link>
                            </div>
                            
                        )}
                    </div>
                </nav>
            </header>
      
    );
};

export default Nav;
