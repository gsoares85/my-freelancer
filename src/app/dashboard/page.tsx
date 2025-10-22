"use client"

import {useUser} from "@clerk/nextjs";

import {UserButton} from "@clerk/clerk-react";

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
