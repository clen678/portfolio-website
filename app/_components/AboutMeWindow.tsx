import ClickableIcon from "./ClickableIcon";

type AboutMeProps = {
    isMaximized?: boolean;
}

export default function AboutMeWindow({ isMaximized }: AboutMeProps) {
    return (
        <div className={`flex flex-col gap-5 w-full h-full bg-[#1E1E1E] rounded-b-md  max-[800px]:p-4 overflow-y-scroll
            ${!isMaximized ? 'py-3 px-8' : 'px-[4%] py-[3%]'}`}>
            <pre className={`text-[#eb6628] font-mono font-bold whitespace-pre leading-tight max-[800px]:text-[10px]`}>
{`    ___    __                __     __  ___   
   /   |  / /_  ____  __  __/ /_   /  |/  /__ 
  / /| | / __ \\/ __ \\/ / / / __/  / /|_/ / _ \\
 / ___ |/ /_/ / /_/ / /_/ / /_   / /  / /  __/
/_/  |_/_.___/\\____/\\__,_/\\__/  /_/  /_/\\___/ `}             
            </pre>
            <div className={`max-[800px]:text-sm ${!isMaximized ? 'pb-3' : 'pb-8 max-[800px]:pb-3'}`}>
                <p>Learn more about my background, experience, and technical interests.</p>
            </div>
            <div className="flex flex-col gap-[8%]">
                <div className="flex w-full items-center gap-[3%]">
                    <img src="file.svg" alt="" className="aspect-square w-[25%]"/>
                    <span className="bg-[#3a3a3a] rounded-full w-1 h-[70%]"></span>
                    <div className="mb-auto">
                        <p>
                            Hi, I’m Charles 👋<br /><br />
                            An IT support specialist at Rocket Lab and a Software Engineering graduate from the University of Auckland.<br /><br />
                            I’m passionate about tech, software development, automation, and building reliable solutions. I’m also a published academic author with research experience alongside my technical and industry work.
                        </p>
                    </div>
                </div>
                <div>
                    <pre className={`text-[#eb6628] font-mono font-bold whitespace-pre leading-tight max-[800px]:text-[10px]`}>
                        {`   ___                        
  / _ \\___ ___ __ ____ _  ___ 
 / , _/ -_|_-</ // /  ' \\/ -_)
/_/|_|\\__/___/\\_,_/_/_/_/\\__/ 
                               `}
                    </pre>
                    <div className={`max-[800px]:text-sm ${!isMaximized ? 'pb-3' : 'pb-8 max-[800px]:pb-3'}`}>
                        <p>Learn more about my background, experience, and technical interests.</p>
                    </div>
                    <object data="/resume.pdf" type="application/pdf" className="w-full aspect-[1.41] border-2 border-[#3a3a3a] rounded-lg">
                        <p>It seems your browser doesn't support PDFs. You can download the PDF to view it: <a href="/resume.pdf" className="text-blue-500 underline">Download PDF</a>.</p>
                    </object>
                </div>
            </div>
        </div>
    );
}