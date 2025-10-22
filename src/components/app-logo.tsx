import {Clock2Icon} from "lucide-react";

export const AppLogo = () => {
    return (
        <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                <Clock2Icon className="bg-white text-red-500 rounded-full p-0 m-0 border-none" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
                My Freelancer
            </h1>
        </div>
    )
}