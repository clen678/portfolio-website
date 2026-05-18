"use client";
import { useEffect, useState } from "react";

import { Volume2, Power, ChevronDown, GitFork } from "lucide-react";

export default function TopBar({ timeZone }: { timeZone?: string }) {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        // initialize on mount to avoid SSR/client hydration mismatch
        const setInitial = () => setNow(new Date());
        setInitial();

        // align update to the start of the next minute, then tick every minute
        const msToNextMinute = (60 - new Date().getSeconds()) * 1000 - new Date().getMilliseconds();
        const timeoutId = setTimeout(() => {
            setNow(new Date());
            const intervalId = setInterval(() => setNow(new Date()), 60_000);
            // store on window so cleanup can clear it (closure safety)
            (window as any).__topbar_minute_interval = intervalId;
        }, msToNextMinute);

        return () => {
            clearTimeout(timeoutId);
            const intervalId = (window as any).__topbar_minute_interval;
            if (intervalId) clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="grid grid-cols-[0.2fr_2fr_0.2fr] w-full h-full bg-[#1D1D1D] px-2">
            <div className="flex items-center">
                Activities
            </div>

            <div className="flex items-center justify-center">
                {now ? (
                    <div className="mr-2">{`${now.getDate()} ${now.toLocaleString(undefined, { month: 'short' })}`}</div>
                ) : null}
                {now ? (
                    <div className="leading-tight">{now.toLocaleTimeString(undefined, { timeZone, hour: "2-digit", minute: "2-digit" })}</div>
                ) : null}
            </div>

            <div className="flex items-center justify-end gap-3 text-white">
                <GitFork size={20} className="hover:bg-[#ffffff23] rounded-sm p-[2px]" />
                <Volume2 size={20} className="hover:bg-[#ffffff23] rounded-sm p-[2px]" />
                <Power size={20} className="hover:bg-[#ffffff23] rounded-sm p-[2px]" />
                <ChevronDown size={20} className="hover:bg-[#ffffff23] rounded-sm p-[2px]" />
            </div>
        </div>
    );
}