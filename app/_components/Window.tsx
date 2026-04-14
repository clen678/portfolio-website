"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Square, SquareArrowDownLeft, X } from "lucide-react";

import FileExplorerWindow from "./FileExplorerWindow";
import AboutMeWindow from "./AboutMeWindow";
import ContactWindow from "./ContactWindow";
import TerminalWindow from "./TerminalWindow";
import ProjectsWindow from "./ProjectsWindow";

type WindowProps = {
    windowType: string;
    initialX?: number;
    initialY?: number;
    width?: number;
    height?: number;
    chromeOffsetX?: number;
    chromeOffsetY?: number;
    onFocus?: () => void;
    closeWindow: () => void;
    zIndex?: number;
};

export default function Window({
    windowType,
    initialX = 300,
    initialY = 90,
    width = 800,
    height = 500,
    chromeOffsetX = 0,
    chromeOffsetY = 0,
    onFocus,
    closeWindow,
    zIndex = 50,
}: WindowProps) {
    const topbarHeight = 32;

    const getNavbarWidth = () => {
        if (typeof window === "undefined") {
            return chromeOffsetX || 82;
        }

        return chromeOffsetX || Math.min(Math.max(window.innerWidth * 0.06, 60), 82);
    };

    const [position, setPosition] = useState({ x: initialX, y: initialY });
    const [size, setSize] = useState({ width, height });
    const [isDragging, setIsDragging] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [prevState, setPrevState] = useState({ x: initialX, y: initialY, width, height });
    const dragRef = useRef({ startX: 0, startY: 0, offsetX: 0, offsetY: 0 });

    const renderWindowContent = () => {
        switch (windowType) {
            case "File Explorer":
                return <FileExplorerWindow />;
            case "About Me":
                return <AboutMeWindow />;
            case "Contact":
                return <ContactWindow />;
            case "Terminal":
                return <TerminalWindow />;
            case "Projects":
                return <ProjectsWindow />;
            default:
                return <div>Unknown Window</div>;
        }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isMaximized) return;
        setIsDragging(true);
        dragRef.current = {
            startX: event.clientX,
            startY: event.clientY,
            offsetX: position.x,
            offsetY: position.y,
        };
        onFocus?.();
    };

    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (event: MouseEvent) => {
            const deltaX = event.clientX - dragRef.current.startX;
            const deltaY = event.clientY - dragRef.current.startY;
            setPosition({
                x: dragRef.current.offsetX + deltaX,
                y: dragRef.current.offsetY + deltaY,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        const applyResponsiveLayout = () => {
            if (isMaximized) {
                const navbarWidth = chromeOffsetX || getNavbarWidth();
                const topOffset = chromeOffsetY || topbarHeight;

                setPosition({ x: navbarWidth, y: topOffset });
                setSize({
                    width: window.innerWidth - navbarWidth,
                    height: window.innerHeight - topOffset,
                });
                return;
            }

            const maxWidth = Math.max(320, window.innerWidth - 16);
            const maxHeight = Math.max(240, window.innerHeight - topbarHeight - 16);
            const nextWidth = Math.min(width, maxWidth);
            const nextHeight = Math.min(height, maxHeight);
            const maxX = Math.max(8, window.innerWidth - nextWidth - 8);
            const maxY = Math.max(topbarHeight + 8, window.innerHeight - nextHeight - 8);

            setSize({ width: nextWidth, height: nextHeight });
            setPosition((currentPosition) => ({
                x: Math.max(8, Math.min(currentPosition.x, maxX)),
                y: Math.max(topbarHeight + 8, Math.min(currentPosition.y, maxY)),
            }));
        };

        applyResponsiveLayout();
        window.addEventListener("resize", applyResponsiveLayout);

        return () => window.removeEventListener("resize", applyResponsiveLayout);
    }, [isMaximized, width, height, chromeOffsetX, chromeOffsetY]);

    const handleMaximize = () => {
        if (isMaximized) {
            setPosition({ x: prevState.x, y: prevState.y });
            setSize({ width: prevState.width, height: prevState.height });
        } else {
            setPrevState({ x: position.x, y: position.y, width: size.width, height: size.height });
            const navbarWidth = getNavbarWidth();
            const topOffset = chromeOffsetY || topbarHeight;

            setPosition({ x: navbarWidth, y: topOffset });
            setSize({
                width: window.innerWidth - navbarWidth,
                height: window.innerHeight - topOffset,
            });
        }
        setIsMaximized(!isMaximized);
    };

    return (
        <motion.div
            className="fixed top-0 left-0 flex flex-col rounded-md shadow-xl border-t border-[#474544]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
                x: position.x,
                y: position.y,
                width: `${size.width}px`,
                height: `${size.height}px`,
                zIndex,
            }}
        >
            <div
                className="text-white flex h-8 w-full pl-3 cursor-move select-none rounded-t-md bg-[#333031]"
                onMouseDown={handleMouseDown}
            >
                <div className="flex items-center h-full py-2">{windowType}</div>

                <button className="px-3 ml-auto hover:cursor-pointer" type="button" onClick={closeWindow}>
                    <Minus size={16} className="hover:bg-[#ffffff23] rounded-xs"/>
                </button>

                <button className="px-3 hover:cursor-pointer" type="button" onClick={handleMaximize}>
                    {isMaximized ? <SquareArrowDownLeft size={16} className="hover:bg-[#ffffff23] p-[1px]" /> : <Square size={16} className="hover:bg-[#ffffff23] p-[1px]"/>}
                </button>

                <button className="px-3 hover:cursor-pointer" type="button" onClick={closeWindow}>
                    <X size={16} className="bg-[#EB5625] rounded-full p-[1px] hover:bg-[#fd7649]"/>
                </button>
            </div>

            {renderWindowContent()}
        </motion.div>
    );
}