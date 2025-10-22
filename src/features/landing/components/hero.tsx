import {Button} from "@/components/ui/button";
import {Check, Play, PlayCircleIcon} from "lucide-react";

export const Hero = () => {
    return (
        <div className="text-white py-20 px-6 bg-gradient-to-r from-red-600 to-red-500">
            <div className="max-w-7xl mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Master Your Focus,
                        <br />
                        <span className="text-red-200">Achieve More</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
                        Combine the power of Pomodoro technique with smart task management. Track time, manage projects,
                        and boost productivity like never before.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                        <Button className="bg-white text-red-600 cursor-pointer font-semibold
                        px-10 py-8 hover:bg-gray-50 transition-colors shadow-lg rounded-xl text-lg">
                            <Play className="bg-transparent border-none text-red-500 mr-1" />
                            Start Free Trial
                        </Button>
                        <Button className="border-2 bg-transparent border-white text-white px-10 py-8 rounded-xl
                        font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors cursor-pointer">
                            <PlayCircleIcon className="bg-white w-10 h-10 rounded-full border-none text-red-500 mr-1" />
                            Watch Demo
                        </Button>
                    </div>
                    <div className="flex items-center justify-center space-x-8 text-red-100">
                        <div className="flex items-center space-x-2">
                            <Check className="bg-transparent text-red-100 mr-1" />
                            No Credit Card Required
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="bg-transparent text-red-100 mr-1" />
                            14 days free trial
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="bg-transparent text-red-100 mr-1" />
                            Cancel anytime
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
