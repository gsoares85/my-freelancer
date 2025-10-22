"use client"

import {useUser, UserButton} from "@clerk/nextjs";

const DashboardPage = () => {
    const {user} = useUser();

    return (
        <div>
            Dashboard {user?.firstName} {user?.lastName}
            <UserButton />
        </div>
    )
}

export default DashboardPage;
