type ProjectCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
}

export default function ProjectCard({ title, description, imageUrl, tags }: ProjectCardProps) {
    return (
        <div className="flex w-full bg-[#3d3d3d] rounded-2xl shadow-[5px_12px_30px_rgba(0,0,0,0.45)] border-l-4 border-[#eb6628]
            transition-transform duration-200 ease-out hover:-translate-y-2 hover:-translate-x-2 hover:-rotate-1 hover:border-[#faa82e] hover:cursor-pointer">
            <div className="w-[55%]">
                <img src={imageUrl} alt={title}
                    className="rounded-l-2xl aspect-video object-cover" />
            </div>

            <div className="relative flex flex-col justify-between w-[45%] h-full p-4 max-[800px]:py-2 max-[800px]:pr-2">
                {/* <div className="absolute border-l-4 border-[#3d3d3d] rounded-l-2xl w-5 h-full top-0 -left-2 bg-[#3d3d3d]" /> */}
                <div>
                    <p className="font-medium text-2xl max-[800px]:text-xs w-full my-1">{title}</p>
                    <p className="max-[800px]:hidden">{description}</p>
                </div>

                <div className="flex gap-2 max-[800px]:gap-1 max-[800px]:gap-y-1 w-full max-[800px]:text-[9px] flex-wrap">
                    {tags.map((tag) => (
                        <div key={tag} className="py-1 px-[5px] bg-[#303030] rounded-md">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}