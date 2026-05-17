type ProjectPageProps = {
 title?: string;
}

export default function ProjectPage({ title }: ProjectPageProps) {
    return (
        <div className="w-full bg-amber-500">
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    );
}