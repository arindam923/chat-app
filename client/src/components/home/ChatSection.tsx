import { Mic, Plus, Search, Send, Settings2 } from "lucide-react";
import Image from "next/image";

type ChatSectionPorps = {
	chatId: string;
};



type MessageListProps = {
	id: string,
	name: string,
	avatar: string,
	messageType: string | File
	message: string,
	time: string,
	sender: string
}

const fakeMessages: MessageListProps[] = [
	{
		id: '1',
		name: 'John Doe',
		avatar: 'https://i.pravatar.cc/150?img=60',
		messageType: 'string',
		message: 'Hello, how are you?',
		time: '2023-04-23 10:30:00',
		sender: 'John Doe'
	},
	{
		id: '2',
		name: 'Jane Smith',
		avatar: 'https://i.pravatar.cc/150?img=60',
		messageType: 'string',
		message: 'I\'m doing great, thanks for asking!',
		time: '2023-04-23 10:32:00',
		sender: 'Jane Smith'
	},

	{
		id: '10',
		name: 'Bob Johnson',
		avatar: 'https://i.pravatar.cc/150?img=60',
		messageType: 'file',
		message: 'document.pdf',
		time: '2023-04-23 11:45:00',
		sender: 'Bob Johnson'
	}
];

const MessageList: React.FC<MessageListProps> = ({ avatar, message }) => {
	return (
		<div className="flex mb-2 items-center space-x-2">
			<Image src={avatar} alt="" width={30} height={30} className="rounded-full" />
			<div className="p-4 rounded-md bg-neutral-900">
				<p className="text-xs text-white">{message}</p>
			</div>
		</div>
	)
}

const ChatSection: React.FC<ChatSectionPorps> = ({ chatId }) => {
	return (
		<div className="relative bg-[#0b0b0b] flex-1">
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
								key={`${index + 1}`}
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
			<div className="mt-20 px-4">
				{fakeMessages.map(item => (
					<MessageList {...item} />
				))}
			</div>
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
