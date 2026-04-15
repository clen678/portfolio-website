'use client'

import NavBar from "./_components/NavBar";
import TopBar from "./_components/TopBar";
import ClickableIcon from "./_components/ClickableIcon";
import Window from "./_components/Window";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type WindowName = "Projects" | "About Me" | "Contact" | "File Explorer" | "Terminal";

type WindowState = {
  isOpen: boolean;
  zIndex: number;
  x: number;
  y: number;
};

export default function Home() {
  const BASE_WINDOW_X = 300;
  const BASE_WINDOW_Y = 90;
  const WINDOW_OFFSET_X = 24;
  const WINDOW_OFFSET_Y = 20;
  const MAX_OFFSET_STEPS = 10;

  const [windows, setWindows] = useState<Record<WindowName, WindowState>>({
    "Projects": { isOpen: false, zIndex: 50, x: BASE_WINDOW_X, y: BASE_WINDOW_Y },
    "About Me": { isOpen: false, zIndex: 50, x: BASE_WINDOW_X, y: BASE_WINDOW_Y },
    "Contact": { isOpen: false, zIndex: 50, x: BASE_WINDOW_X, y: BASE_WINDOW_Y },
    "File Explorer": { isOpen: false, zIndex: 50, x: BASE_WINDOW_X, y: BASE_WINDOW_Y },
    "Terminal": { isOpen: true, zIndex: 50, x: BASE_WINDOW_X, y: BASE_WINDOW_Y },
  });
  const [highestZIndex, setHighestZIndex] = useState(50);
  const [nextWindowOffsetStep, setNextWindowOffsetStep] = useState(1);

  const openWindow = (windowType: WindowName) => {
    const nextZIndex = highestZIndex + 1;
    const nextX = BASE_WINDOW_X + nextWindowOffsetStep * WINDOW_OFFSET_X;
    const nextY = BASE_WINDOW_Y + nextWindowOffsetStep * WINDOW_OFFSET_Y;

    setWindows(prev => ({
      ...prev,
      [windowType]: {
        isOpen: true,
        zIndex: nextZIndex,
        x: nextX,
        y: nextY,
      },
    }));
    setHighestZIndex(nextZIndex);
    setNextWindowOffsetStep((prev) => (prev + 1) % MAX_OFFSET_STEPS);
    console.log("Opening window:", windowType, "with z-index:", nextZIndex);
  };

  const focusWindow = (windowType: WindowName) => {
    const nextZIndex = highestZIndex + 1;
    setWindows(prev => ({
      ...prev,
      [windowType]: {
        ...prev[windowType],
        zIndex: nextZIndex,
      },
    }));
    setHighestZIndex(nextZIndex);
  };

  const closeWindow = (windowType: WindowName) => {
    setWindows(prev => ({
      ...prev,
      [windowType]: {
        ...prev[windowType],
        isOpen: false,
      },
    }));
  };

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-linear-to-br from-[#cf462e] via-[#6E162B] to-[#30032D]">
      <div className="h-8">
        <TopBar />
      </div>

      <div className="flex flex-1 min-h-0 w-full">
        <div className="w-[clamp(60px,6vw,82px)] h-full shrink-0 bg-blue">
          <NavBar openWindow={openWindow} closeWindow={closeWindow} />
        </div>

        <div className="
          grid grid-cols-2 grid-rows-4 gap-y-3 gap-x-3 max-h-[50%] p-[1%]
          [@media(max-height:700px)]:max-h-[60%]
        ">
          <ClickableIcon img="/folderopen.svg" alt="home" size={50} label="Projects" openWindow={() => openWindow("Projects")} />
          <ClickableIcon img="/about.svg" alt="home" size={50} label="About Me" openWindow={() => openWindow("About Me")} />
          <ClickableIcon img="/chat.svg" alt="home" size={50} label="Contact" openWindow={() => openWindow("Contact")} />
          <ClickableIcon img="/folder-open.svg" alt="home" size={50} label="hwllo" openWindow={() => openWindow("File Explorer")} />
          <ClickableIcon img="/file.svg" alt="home" size={50} label="UwU" openWindow={() => openWindow("File Explorer")} />
        </div>
      </div>

      <AnimatePresence>
        {windows["Projects"].isOpen && <Window key="Projects" windowType="Projects" initialX={windows["Projects"].x} initialY={windows["Projects"].y} closeWindow={() => closeWindow("Projects")} onFocus={() => focusWindow("Projects")} zIndex={windows["Projects"].zIndex} />}
        {windows["About Me"].isOpen && <Window key="About Me" windowType="About Me" initialX={windows["About Me"].x} initialY={windows["About Me"].y} closeWindow={() => closeWindow("About Me")} onFocus={() => focusWindow("About Me")} zIndex={windows["About Me"].zIndex} />}
        {windows["Contact"].isOpen && <Window key="Contact" windowType="Contact" initialX={windows["Contact"].x} initialY={windows["Contact"].y} closeWindow={() => closeWindow("Contact")} onFocus={() => focusWindow("Contact")} zIndex={windows["Contact"].zIndex} />}
        {windows["File Explorer"].isOpen && <Window key="File Explorer" windowType="File Explorer" initialX={windows["File Explorer"].x} initialY={windows["File Explorer"].y} closeWindow={() => closeWindow("File Explorer")} onFocus={() => focusWindow("File Explorer")} zIndex={windows["File Explorer"].zIndex} />}
        {windows["Terminal"].isOpen && <Window key="Terminal" windowType="Terminal" initialX={windows["Terminal"].x} initialY={windows["Terminal"].y} closeWindow={() => closeWindow("Terminal")} onFocus={() => focusWindow("Terminal")} zIndex={windows["Terminal"].zIndex} />}
      </AnimatePresence>
    </div>
  );
}
