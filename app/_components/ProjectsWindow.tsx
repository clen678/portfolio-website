import ProjectCard from "./ProjectCard";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import ProjectPage from "./ProjectPage";

type ProjectsWindowProps = {
    isMaximized: boolean;
    currentProject: string;
    setCurrentProject: (project: string) => void;
    setHistory: Dispatch<SetStateAction<string[]>>;
    historyIndex: number;
    projectOpen: boolean;
    setProjectOpen: (open: boolean) => void;
    onStartPage: boolean;
    setOnStartPage: (startPage: boolean) => void;
    setProjectsHistoryIndex: Dispatch<SetStateAction<number>>;
}

export default function ProjectsWindow({ isMaximized, historyIndex, setProjectsHistoryIndex, setHistory, currentProject, setCurrentProject, projectOpen, setProjectOpen, onStartPage, setOnStartPage }: ProjectsWindowProps ) {
    const [currentImageUrl, setCurrentImageUrl] = useState<string>("");
    const [currentDescription, setCurrentDescription] = useState<string>("");
    const [currentTags, setCurrentTags] = useState<string[]>([]);
    const [currentLinks, setCurrentLinks] = useState<{ label: string, url: string }[]>([]);

    useEffect(() => {
        // update current project details when currentProject changes
        switch (currentProject) {
            case "Autonomous F1Tenth":
                setCurrentImageUrl("/f1tenth.png");
                setCurrentDescription("Published research on an autonomous F1Tenth car that uses reinforcement learning and LiDAR to navigate a track at high speeds.");
                setCurrentTags(["Python", "Reinforcement Learning"]);
                setCurrentLinks([{ label: "Paper", url: "https://arxiv.org/abs/2210.15833" }, { label: "Code", url: "https://github.com/yourusername/f1tenth" }]);
            }
    }, [currentProject]);

    const openProject = (title: string) => {
        setProjectOpen(true);
        setCurrentProject(title);
        setHistory(prev => {
            let next: string[];
            if (onStartPage) {
                // avoid duplicating "start" if it's already the last entry
                if (prev[prev.length - 1] === "start") {
                    next = [...prev, title];
                } else {
                    next = [...prev, "start", title];
                }
            } else {
                next = [...prev, title];
            }
            setProjectsHistoryIndex(next.length - 1);
            return next;
        });
        setOnStartPage(false);
    }

    return (
        <div className={`flex flex-col gap-5 w-full h-full bg-[#1E1E1E] rounded-b-md  max-[800px]:p-4 overflow-y-scroll
            ${!isMaximized ? 'py-3 px-8' : 'px-[4%] py-[3%]'}`}>
            <pre className={`text-[#eb6628] font-mono font-bold whitespace-pre leading-tight max-[800px]:text-[10px]`}>
{`     ____               _           __
    / __ \\_________    (_)__  _____/ /______
   / /_/ / ___/ __ \\  / / _ \\/ ___/ __/ ___/
  / ____/ /  / /_/ / / /  __/ /__/ /_(__  )
 /_/   /_/   \\____/_/ /\\___/\\___/\\__/____/
                  /__/         `}             
            </pre>
            {!projectOpen ? 
            (
                <>
                    <div className={`max-[800px]:text-sm ${!isMaximized ? 'pb-3' : 'pb-8 max-[800px]:pb-3'}`}>
                        <p>Welcome to my interactive portfolio website!</p>
                        <p>Click around on the desktop and taskbar icons to explore and.</p>
                    </div>
                    <div className={`flex flex-col gap-5 ${!isMaximized ? '' : 'max-[950px]:items-center'}`}>
                        <ProjectCard
                            title="Autonomous F1Tenth"
                            description="Published research on an autonomous F1Tenth car that uses reinforcement learning and LiDAR to navigate a track at high speeds."
                            imageUrl="/f1tenth.png" tags={["Python", "Reinforcement Learning"]} isMaximized={isMaximized} onClick={() => openProject("Autonomous F1Tenth")} />
                        <ProjectCard
                            title="Clen3t AI Tic Tac Toe"
                            description="Play against AI agents in a game of tictactoe with logins, scoring and variable difficulty."
                            imageUrl="/clen3t.png" tags={["React.js", "MongoDB", "Spring Boot"]} isMaximized={isMaximized} onClick={() => openProject("Clen3t AI Tic Tac Toe")} />
                        <ProjectCard
                            title="WDCC ESA Website"
                            description="Project manager for an 11-member team building a website that handles club memberships, event management and payments."
                            imageUrl="/esa.png" tags={["Next.js", "Stripe", "Payload CMS"]} isMaximized={isMaximized} onClick={() => openProject("WDCC ESA Website")} />
                        <ProjectCard
                            title="WDCC Volunteers Website"
                            description="Developer for a club website that manages volunteer sign-ups and event coordination."
                            imageUrl="/vols.png" tags={["React.js", "Node.js", "Firebase"]} isMaximized={isMaximized} onClick={() => openProject("WDCC Volunteers Website")} />
                    </div>
                </>
            ) : 
            (
                    currentProject && <ProjectPage title={currentProject} imageUrl={currentImageUrl} tags={currentTags} description={currentDescription} links={currentLinks} isMaximized={isMaximized} /> 
            )}
        </div>
    );
}