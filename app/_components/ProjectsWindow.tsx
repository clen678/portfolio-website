import ClickableIcon from "./ClickableIcon";
import ProjectCard from "./ProjectCard";

export default function ProjectsWindow() {
    return (
        <div className="flex flex-col gap-5 w-full h-full bg-[#303030] rounded-b-md py-3 px-8 max-[800px]:p-4 overflow-y-scroll">
            <p className="text-[#eb6628] font-medium text-3xl p-3">My Projects</p>
            <ProjectCard
                title="Autonomous F1Tenth"
                description="Published research on an autonomous F1Tenth car that uses reinforcement learning and LiDAR to navigate a track at high speeds."
                imageUrl="/f1tenth.png" tags={["Python", "Reinforcement Learning"]} />
            <ProjectCard 
                title="Clen3t AI Tic Tac Toe"
                description="Vs AI agents in a game of tictactoe with logins, scoring and variable difficulty."
                imageUrl="/clen3t.png" tags={["React.js", "MongoDB", "Spring Boot"]} />
            <ProjectCard 
                title="WDCC ESA Website"
                description="Project manager for an 11-member team building a website that handles club memberships, event management and payments."
                imageUrl="/esa.png" tags={["Next.js", "Stripe", "Payload CMS"]} />
            <ProjectCard 
                title="WDCC Volunteers Website"
                description="Developer for a club website that manages volunteer sign-ups and event coordination."
                imageUrl="/vols.png" tags={["React.js", "Node.js", "Firebase", "Fire CMS"]} />
        </div>
    );
}