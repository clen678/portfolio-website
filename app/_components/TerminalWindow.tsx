export default function TerminalWindow() {
    return (
        <div className="flex font-mono flex-col w-full h-full bg-[#300A24] rounded-b-md p-3 text-white">
            <p>Ubuntu 24.04 LTS</p>

            <pre className="whitespace-pre leading-tight max-[810px]:text-[10px]">
                {`    ________               __               
   / ____/ /_  ____ ______/ /__  _____      
  / /   / __ \\/ __ \`/ ___/ / _ \\/ ___/      
 / /___/ / / / /_/ / /  / /  __(__  )       
 \\____/_/ /_/\\__,_/_/  /_/\\___/____/        
    / /   ___  ____  ____ _                 
   / /   / _ \\/ __ \\/ __ \`/                 
  / /___/  __/ / / / /_/ /                  
 /_____\\/\\___/_/ /_/\\__, /                   
    ____         /____/  ____      ___     
   / __ \\____  _____/ /_/ __/___  / (_)___ 
  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\
 / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /
/_/    \\____/_/   \\__/_/  \\____/_/_/\\____/ 

`}
            </pre>
            <div className="max-[810px]:text-xs">
                <p>Welcome to my interactive portfolio website!</p>
                <p>Click around on the desktop and taskbar icons to explore and learn more about me.</p>
            </div>

            <div className="text-green-400 font-mono max-[810px]:text-xs">
                <p className="pt-6">clen678@portfolio:~$ <span className="animate-pulse text-white">█</span></p>
            </div>
        </div>
    );
}