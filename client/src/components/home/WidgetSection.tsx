"use client";

import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const TaskComponent = () => {
	return (
		<div className="bg-zinc-900 rounded-md mb-2 p-4">
			<h3 className="text-xs font-semibold">Task Name</h3>
			<div className="flex items-center space-x-2 text-xs">
				<div className="w-full h-[1px] bg-gray-400">
					<div className="h-full w-[75%] bg-green-500" />
				</div>
				<span>75%</span>
			</div>
			<div className="flex items-center justify-between text-xs">
				<div className="flex items-center ">
					{new Array(3).fill(0).map((_, index) => (
						<Image
							key={index}
							src={`https://i.pravatar.cc/150?img=${index}`}
							alt=""
							width={25}
							height={25}
							className="rounded-full"
						/>
					))}
				</div>

				<span>More Info</span>
			</div>
		</div>
	);
};

const SharedFileSection = () => {
	const tabs = ["images", "videos", "files", "Other"];
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	const fakeFilesData: FileComponentProps[] = [
		{
			image:
				"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
			fileSize: "2.5 MB",
			date: "2023-04-20",
			fileName: "document.pdf",
		},
		{
			image:
				"https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=800",
			fileSize: "500 KB",
			date: "2023-04-21",
			fileName: "presentation.pptx",
		},
		{
			image:
				"https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=800",
			fileSize: "1.8 MB",
			date: "2023-04-22",
			fileName: "spreadsheet.xlsx",
		},
	];

	return (
		<div>
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-semibold">Shared Files</h3>
				<ChevronDown />
			</div>
			<div className="flex justify-around mt-4 text-xs border-b-2 border-zinc-900 ">
				{tabs.map((item, index) => (
					<button
						className={` ${
							selectedTab === item ? "border-b" : ""
						}  border-blue-600 pb-2`}
						onClick={() => setSelectedTab(item)}
						key={index}
					>
						{item}
					</button>
				))}
			</div>
			<div>
				{fakeFilesData.map((item, index) => (
					<FileComonent {...item} key={index} />
				))}
			</div>
		</div>
	);
};

type FileComponentProps = {
	image: string;
	fileSize: string;
	date: string;
	fileName: string;
};

const FileComonent: React.FC<FileComponentProps> = ({
	image,
	fileName,
	fileSize,
	date,
}) => {
	return (
		<div className=" bg-zinc-900 rounded-md flex mt-2  items-center p-2">
			<Image src={image} width={30} height={30} className="rounded-sm" alt="" />
			<div className="flex-1 ml-4">
				<h3 className="text-sm font-semibold ">{fileName}</h3>
				<div className="text-xs mt-2 flex space-x-2 text-gray-600">
					<p>{fileSize}</p>
					<p>{date}</p>
				</div>
			</div>
			<div>
				<Download />
			</div>
		</div>
	);
};

const WidgetSection = () => {
	return (
		<div className="h-screen p-2 w-full max-w-[250px] border-l border-slate-700">
			<div className="h-[250px]">
				<h3>Tasks</h3>
				<TaskComponent />

				<TaskComponent />
			</div>
			<SharedFileSection />
		</div>
	);
};

export default WidgetSection;
