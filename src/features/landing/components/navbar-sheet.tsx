import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import {AppLogo} from "@/components/app-logo";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const NavbarSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="bg-white border-none" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <AppLogo />
                    </SheetTitle>
                    <SheetDescription>
                        <div className="fex flex-col mt-10 space-y-2">
                            <Link href="/features">
                                <div className="flex w-full p-3 cursor-pointer text-black bg-white hover:bg-gray-400/10 rounded-md">
                                    Features
                                </div>
                            </Link>
                            <Link href="/pricing">
                                <div className="flex w-full p-3 cursor-pointer text-black bg-white hover:bg-gray-400/10 rounded-md">
                                    Pricing
                                </div>
                            </Link>
                            <Link href="/review">
                                <div className="flex w-full p-3 cursor-pointer text-black bg-white hover:bg-gray-400/10 rounded-md">
                                    Review
                                </div>
                            </Link>
                            <Link href="/auth/sign-in">
                                <div className="flex w-full p-3 cursor-pointer text-black bg-white hover:bg-gray-400/10 rounded-md">
                                    Sign In
                                </div>
                            </Link>
                            <Link href="/auth/sign-up">
                                <Button variant="primary" className="cursor-pointer w-full">
                                    Start Free Trial
                                </Button>
                            </Link>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
