import { Volume2, Power, ChevronDown, GitFork } from "lucide-react";

export default function TopBar() {
    return (
        <div className="grid grid-cols-[0.2fr_2fr_0.2fr] w-full h-full bg-[#1D1D1D] px-2">
            <div className="flex items-center">
                Activities
            </div>

            <div className="flex items-center justify-center">
                12 Date 67:69
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