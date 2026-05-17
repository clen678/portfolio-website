import ClickableIcon from "./ClickableIcon";
import ProjectCard from "./ProjectCard";

type ProjectsWindowProps = {
    isMaximized: boolean;
    goBack: () => void;
    goForward: () => void;
}

export default function ProjectsWindow( { isMaximized, goBack, goForward }: ProjectsWindowProps ) {
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
            <div className={`max-[800px]:text-xs ${!isMaximized ? 'pb-3' : 'pb-8 max-[800px]:pb-3'}`}>
                <p>Welcome to my interactive portfolio website!</p>
                <p>Click around on the desktop and taskbar icons to explore and.</p>
            </div>
            <div className={`flex flex-col gap-5 ${!isMaximized ? '' : 'max-[950px]:items-center'}`}>
                <ProjectCard
                    title="Autonomous F1Tenth"
                    description="Published research on an autonomous F1Tenth car that uses reinforcement learning and LiDAR to navigate a track at high speeds."
                    imageUrl="/f1tenth.png" tags={["Python", "Reinforcement Learning"]} isMaximized={isMaximized} />
                <ProjectCard
                    title="Clen3t AI Tic Tac Toe"
                    description="Play against AI agents in a game of tictactoe with logins, scoring and variable difficulty."
                    imageUrl="/clen3t.png" tags={["React.js", "MongoDB", "Spring Boot"]} isMaximized={isMaximized} />
                <ProjectCard
                    title="WDCC ESA Website"
                    description="Project manager for an 11-member team building a website that handles club memberships, event management and payments."
                    imageUrl="/esa.png" tags={["Next.js", "Stripe", "Payload CMS"]} isMaximized={isMaximized} />
                <ProjectCard
                    title="WDCC Volunteers Website"
                    description="Developer for a club website that manages volunteer sign-ups and event coordination."
                    imageUrl="/vols.png" tags={["React.js", "Node.js", "Firebase"]} isMaximized={isMaximized} />
            </div>
        </div>
    );
}