import {LandingNavbar} from "@/features/landing/components/landing-navbar";
import {Hero} from "@/features/landing/components/hero";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen">
            <LandingNavbar/>
            <Hero/>
        </div>
    );
}
