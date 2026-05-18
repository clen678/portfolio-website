type ProjectPageProps = {
    title?: string;
    description?: string;
    imageUrl?: string;
    tags?: string[];
    isMaximized?: boolean;
    links?: { label: string, url: string }[];
}

export default function ProjectPage({ title, description, imageUrl, tags, isMaximized, links }: ProjectPageProps) {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className={`pb-2 'max-[1100px]:text-md max-[800px]:'}`}>{description}</p>
        </div>
    );
}