import { Mic, Plus, Search, Send, Settings2 } from "lucide-react";
import Image from "next/image";

type ChatSectionPorps = {
	chatId: string;
};

const ChatSection: React.FC<ChatSectionPorps> = ({ chatId }) => {
	return (
		<div className="relative bg-[#1C1917] flex-1">
			{/*top bar it can be personal messsage or a group one*/}
			<div className="absolute justify-between top-0 left-0 w-full flex items-center px-4 h-16 bg-black">
				<div>
					<h3 className="text-sm font-semibold">CopyWriting Team</h3>
					<p className="text-xs text-gray-700">3 Members</p>
				</div>

				<div className="flex items-center space-x-2">
					<div className="w-8 h-8 bg-slate-800 grid place-items-center rounded-full ">
						<Plus />
					</div>
					<div className="flex items-center">
						{new Array(4).fill(0).map((_, index) => (
							<Image
								key={index}
								src={`https://i.pravatar.cc/150?img=${index}`}
								alt=""
								width={30}
								height={30}
								className="rounded-full"
							/>
						))}
					</div>
					<Search />
					<Settings2 />
				</div>
			</div>
			{/*messages section*/}
			<div></div>
			{/*text input**/}
			<div className="absolute w-full bottom-5   flex items-center justify-center">
				<div className="w-[90%] bg-black px-4 py-1 rounded-md flex items-center ">
					<Search />
					<input
						type="text"
						placeholder="enter a message"
						className=" flex-1 px-4 py-2 rounded-md focus:outline-none text-sm bg-black "
					/>
					<div className="flex items-center spae-x-2">
						<Mic />
						<Send />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatSection;
