type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    isMaximized?: boolean;
}

export default function ProjectCard({ title, description, imageUrl, tags, isMaximized }: ProjectCardProps) {
    return (
        <div className={`flex bg-[#3d3d3d] hover:bg-[#4e4e4e] rounded-2xl shadow-[5px_12px_30px_rgba(0,0,0,0.45)] border-l-4 border-[#eb6628]
            transition-all duration-200 ease-out hover:-translate-y-2 hover:-translate-x-1 hover:-rotate-0 hover:border-[#faa82e] hover:cursor-pointer
            ${!isMaximized ? 'w-full max-[800px]:flex-col' : 'max-[950px]:flex-col max-[950px]:w-[90%] max-[800px]:w-full'}`}>
            <div className={`${!isMaximized ? 'w-[55%] max-[800px]:w-full' : 'w-[40%] max-[950px]:w-full'}`}>
                <img src={imageUrl} alt={title}
                    className={`aspect-video object-cover ${!isMaximized ? 'min-[801px]:rounded-l-2xl max-[800px]:rounded-t-2xl' : 'max-[950px]:rounded-t-2xl min-[951px]:rounded-l-2xl'}`} />
            </div>

            <div className={`relative flex flex-col justify-between h-full max-[800px]:py-2 max-[800px]:pr-2 ${!isMaximized ? 'w-[45%] p-4 max-[800px]:w-full' : 'w-[60%] py-[1.5%] px-[2%] max-[950px]:w-full'}`}>
                {/* <div className="absolute border-l-4 border-[#3d3d3d] rounded-l-2xl w-5 h-full top-0 -left-2 bg-[#3d3d3d]" /> */}
                <div>
                    <p className="font-medium text-2xl max-[800px]:text-sm w-full my-1">{title}</p>
                    <p className={`pb-2 ${!isMaximized ? '' : 'max-[1100px]:text-md max-[800px]:'}`}>{description}</p>
                </div>

                <div className="flex gap-2 max-[800px]:gap-1 max-[800px]:gap-y-1 w-full max-[800px]:text-[9px] flex-wrap">
                    {tags.map((tag) => (
                        <div key={tag} className={`bg-[#303030] rounded-md ${!isMaximized ? 'py-1 px-[5px]' : 'min-[1100px]:py-2 min-[1100px]:px-5 py-1 px-[5px]'}`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}