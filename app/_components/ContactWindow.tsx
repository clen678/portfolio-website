import Link from "next/link";

export default function ContactWindow() {
    return (
        <div className="flex flex-col w-full h-full bg-[#303030] rounded-b-md p-3">
            <Link
                href="https://www.linkedin.com/in/charles-leng/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#ffffff23]"
            >
                <span className="">LinkedIn</span>
            </Link>

            <Link
                href="https://github.com/clen678"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#ffffff23]"
            >
                <span className="">GitHub</span>
            </Link>
        </div>
    );
}