'use client';

type ClickableIconProps = {
    img : string;
    size : number;
    alt : string;
    label?: string;
    isFileIcon?: boolean;
    openWindow?: () => void;
}

export default function ClickableIcon({ img, size, alt, label, isFileIcon, openWindow }: ClickableIconProps) {

    return (
        <div className={`flex justify-center items-center w-full p-[10%] rounded-md hover:bg-[#ffffff23] hover:cursor-pointer ${label ? 'aspect-square' : 'aspect-square'}`} onClick={openWindow}>
            <div className={`${label ? 'aspect-square w-[70%]' : 'w-full h-full'}`}>
                <img src={img} alt={alt} className="w-full object-contain" />
                {label && (
                    <div className="flex justify-center mt-1">
                        <div className={`text-sm whitespace-nowrap ${isFileIcon ? 'text-[#333031]' : ''}`}>{label}</div>
                    </div>
                )}
            </div>
        </div>
    );
}