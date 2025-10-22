
interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="flex w-full h-full bg-gray-50">
            <div className="flex justify-center items-center w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;
