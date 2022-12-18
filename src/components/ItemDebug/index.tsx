import ButtonNav from '../ButtonNav';

export interface ItemDebugProps {
	log: {
		id: string;
		color: string;
		data: string;
		backTrace: string;
	};
}

const ItemDebug = ({ log }: ItemDebugProps) => {
	const { color, data, backTrace } = log;
	return (
		<div className='p-5 rounded-lg bg-logy-card hover:bg-logy-card/70 hover:cursor-pointer shadow-sm flex gap-5 overflow-hidden'>
			<ButtonNav color={'border-logy-' + color} />

			<div className='w-full'>
				{!log && <h1 className='text-white text-lg'>My First debug item</h1>}
				{log && (
					<pre className='bg-logy-browm text-white w-full p-3 rounded-lg'>
						{data}
					</pre>
				)}
				<span className='text-[#aaa] font-normal'>{backTrace}</span>
			</div>
		</div>
	);
};

export default ItemDebug;
