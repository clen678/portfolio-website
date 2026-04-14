import ClickableIcon from "./ClickableIcon";

export default function FileExplorerWindow() {
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col gap-3 py-3 px-4 bg-[#F7F7F7] border-r-2 border-[#F0F0F0] rounded-bl-md w-[35%] h-full font-medium text-[#333031]">
                <div>hwllo</div>
                <div>hwllo</div>
                <div>hwllo</div>
                <div>hwllo</div>
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-5 p-3 bg-white rounded-br-md w-full h-full">
                <ClickableIcon img="/file.svg" alt="home" size={50} label="wdwd" isFileIcon={true} />
                <ClickableIcon img="/file.svg" alt="home" size={50} label="wdwd" isFileIcon={true} />
                <ClickableIcon img="/file.svg" alt="home" size={50} label="wdwd" isFileIcon={true} />
            </div>
        </div>
    );
}