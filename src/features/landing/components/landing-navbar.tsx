import {Button} from "@/components/ui/button";
import {NavbarSheet} from "@/features/landing/components/navbar-sheet";
import {AppLogo} from "@/components/app-logo";
import Link from "next/link";

export const LandingNavbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 h-20 w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <AppLogo/>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/features">
                        <span className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">
                            Features
                        </span>
                    </Link>
                    <Link href="/pricing">
                        <span className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">
                            Pricing
                        </span>
                    </Link>
                    <Link href="/review">
                        <span className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">
                            Review
                        </span>
                    </Link>
                    <Link href="/auth/sign-in">
                        <span className="text-gray-600 hover:text-gray-900 font-medium cursor-pointer">
                            Sign In
                        </span>
                    </Link>
                    <Link href="/auth/sign-up">
                        <Button variant="primary" className="cursor-pointer">
                            Start Free Trial
                        </Button>
                    </Link>
                </nav>
                <div className="md:hidden cursor-pointer">
                    <NavbarSheet/>
                </div>
            </div>
        </nav>
    )
}
