import ClickableIcon from "./ClickableIcon";

type WindowName = "Projects" | "About Me" | "Contact" | "File Explorer" | "Terminal";

type NavBarProps = {
    openWindow: (windowType: WindowName) => void;
    closeWindow: (windowType: WindowName) => void;
}

export default function NavBar({ openWindow, closeWindow }: NavBarProps) {
    return (
        <div className="flex h-full min-h-0 flex-col bg-[#00000080] p-[10%]">
            <div className="h-full flex flex-col items-center gap-[2%]">
                <ClickableIcon img="/file-explorer.svg" alt="home" size={50} openWindow={() => openWindow("File Explorer")} />
                <ClickableIcon img="/terminal.svg" alt="home" size={50} openWindow={() => openWindow("Terminal")} />
            </div>

            <div className="h-25 flex items-center justify-center">
                <ClickableIcon img="/grip.svg" alt="home" size={30} />
            </div>
        </div>
    );
}