interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex w-full h-full bg-gray-50">
            <div className="flex justify-center items-center w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;
