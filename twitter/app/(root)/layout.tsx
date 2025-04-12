import Auth from "@/components/test/Auth";
import { getAuthServer } from "@/lib/authOptions";
import { Sidebar } from "lucide-react";
import React from "react";

interface Props {
    children: React.ReactNode;
}
const HomeLayout =  async ({children}: Props) => {
    const session: any = await getAuthServer();

    if(!session) {
        return (
            <div className="container h-screen mx-auto m-w-7xl">
                <Auth/>
            </div>
        )
    }
    return (
        <div>

        <div>
            <Sidebar user={JSON?.parse(JSON.stringify(session?.currentUser))} />
        </div>
        </div>
    )
}

export default HomeLayout