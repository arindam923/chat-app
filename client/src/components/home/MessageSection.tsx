import { Settings } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";

type ChatMessage = {
	name: string;
	avatar: string;
	last_msg: string;
	time: string;
	msg_count: number;
	isOnline: boolean;
};

const ChatMessageComponent = (props: ChatMessage) => {
	return (
		<div className="flex cursor-pointer mb-4 items-center space-x-2">
			<div className="w-[30px] h-[30px] relative">
				<Image
					src={props.avatar}
					width={30}
					height={30}
					className="rounded-full "
					alt=""
				/>
				<div className="bg-green-500 w-2 h-2 rounded-full absolute -left-1 top-0" />
			</div>

			<div className="flex-1">
				<h3 className="text-sm font-semibold">{props.name}</h3>
				<p className="text-xs truncate max-w-[160px]">{props.last_msg}</p>
			</div>
			<div className="text-xs flex flex-col items-end">
				<p className="text-xs text-gray-600">{props.time}</p>
				<div className="h-4 w-4 text-xs text-white bg-red-500 grid place-items-center rounded-full">
					<p>{props.msg_count}</p>
				</div>
			</div>
		</div>
	);
};

const MessageSection = () => {
	const fakeChatMessages: ChatMessage[] = [
		{
			name: "John Doe",
			avatar: "https://i.pravatar.cc/150?img=14",
			last_msg: "Hi there! How are you doing?",
			time: "2 mins ago",
			msg_count: 5,
			isOnline: true,
		},
		{
			name: "Jane Smith",
			avatar: "https://i.pravatar.cc/150?img=12",
			last_msg: "I'll get back to you soon.",
			time: "3 day ago",
			msg_count: 2,
			isOnline: false,
		},
		{
			name: "Michael Johnson",
			avatar: "https://i.pravatar.cc/150?img=50",
			last_msg: "Did you finish the project?",
			time: "11:15 AM",
			msg_count: 8,
			isOnline: true,
		},
		{
			name: "Emily Davis",
			avatar: "https://i.pravatar.cc/150?img=44",
			last_msg: "Sounds good! Let's meet tomorrow.",
			time: "4:20 PM",
			msg_count: 3,
			isOnline: false,
		},
		{
			name: "David Wilson",
			avatar: "https://i.pravatar.cc/150?img=40",
			last_msg: "I'll send you the details shortly.",
			time: "9:00 AM",
			msg_count: 6,
			isOnline: true,
		},
		{
			name: "Sarah Thompson",
			avatar: "https://i.pravatar.cc/150?img=42",
			last_msg: "Have you reviewed the proposal?",
			time: "1:30 PM",
			msg_count: 4,
			isOnline: false,
		},
		{
			name: "Robert Anderson",

			avatar: "https://i.pravatar.cc/150?img=22",
			last_msg: "Thanks for your help!",
			time: "3:15 PM",
			msg_count: 2,
			isOnline: true,
		},
		{
			name: "Jessica Taylor",

			avatar: "https://i.pravatar.cc/150?img=32",
			last_msg: "I'll be there in 10 minutes.",
			time: "11:45 AM",
			msg_count: 7,
			isOnline: false,
		},
		{
			name: "Christopher Brown",
			avatar: "https://i.pravatar.cc/150?img=19",
			last_msg: "Let's discuss this further tomorrow.",
			time: "10 mins ago",
			msg_count: 3,
			isOnline: true,
		},
		{
			name: "Ashley Martinez",
			avatar: "https://i.pravatar.cc/150?img=31",
			last_msg: "Did you receive my email?",
			time: "4 hours ago",
			msg_count: 4,
			isOnline: false,
		},
	];
	return (
		<div className="max-w-[300px] w-full h-screen border-r px-4 py-2 border-neutral-700">
			<div className="flex items-center justify-between">
				<p className="font-bold">Home</p>
				<Settings />
			</div>

			<Input
				placeholder="Search.."
				className="bg-black mt-5 border-slate-700 focus:border-slate-700 "
			/>

			<div className="mt-5">
				<p className="font-semibold text-slate-600 mb-2 tracking-wide text-sm uppercase">
					Pinned
				</p>
				{fakeChatMessages.splice(8).map((item, index) => (
					<ChatMessageComponent key={index} {...item} />
				))}
			</div>
			<div>
				<p className="font-semibold text-slate-600 mb-2 tracking-wide text-sm uppercase">
					Direct Messages
				</p>
				{fakeChatMessages.splice(4, 8).map((item, index) => (
					<ChatMessageComponent key={index} {...item} />
				))}
			</div>

			<div>
				<p className="font-semibold text-slate-600 mb-2 tracking-wide text-sm uppercase">
					Group Messages
				</p>
				{fakeChatMessages.splice(1, 3).map((item, index) => (
					<ChatMessageComponent key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default MessageSection;
