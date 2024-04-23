import { Home, Plus } from "lucide-react";

type ServerProps = {
	name: string;
	image: string;
	id: string;
};

const Sidebar = () => {
	const data: ServerProps[] = [];
	return (
		<aside className="w-[60px] border-r h-screen border-neutral-700 flex flex-col items-center py-4">
			<div className="w-10 h-10 rounded-full grid place-items-center bg-slate-700">
				<Home size={20} />
			</div>
			{/*here i'll fetch the server list based on the user id and render it*/}
			<div className="mt-10">
				{data.map((item) => (
					<button key={item.id}></button>
				))}
			</div>

			<button className="w-10 h-10 rounded-full grid place-items-center bg-slate-700">
				<Plus size={20} />
			</button>
		</aside>
	);
};

export default Sidebar;
