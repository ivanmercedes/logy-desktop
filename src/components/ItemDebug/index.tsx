import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { JSONTree } from 'react-json-tree';
import { getFilename } from '../../util';
import ButtonNav from '../ButtonNav';

const { ipcRenderer } = window.require('electron');

export interface ItemDebugProps {
	log: {
		id: string;
		color: string;
		data: string;
		backTrace: {
			columnNumber: number;
			lineNumber: number;
			fileName: string;
			functionName: string;
			source: string;
		};
	};
}

const theme = {
	scheme: 'flat',
	author: 'chris kempson (http://chriskempson.com)',
	base00: '#0000007f',
	base01: '#34495E',
	base02: '#7F8C8D',
	base03: '#95A5A6',
	base04: '#BDC3C7',
	base05: '#e0e0e0',
	base06: '#f5f5f5',
	base07: '#ECF0F1',
	base08: '#E74C3C',
	base09: '#E67E22',
	base0A: '#F1C40F',
	base0B: '#d3bb64',
	base0C: '#1ABC9C',
	base0D: '#3498DB',
	base0E: '#9B59B6',
	base0F: '#be643c',
};

const ItemDebug = ({ log }: ItemDebugProps) => {
	const { color, data, backTrace } = log;

	const openFile = (path: string): void => {
		ipcRenderer.send('open-file', JSON.stringify(path));
	};

	useEffect(() => {}, [data]);
	return (
		<motion.div
			layout
			className='p-5 rounded-lg bg-logy-card hover:bg-logy-card/70 hover:cursor-pointer shadow-sm flex gap-5 overflow-hidden'
		>
			<ButtonNav color={'border-logy-' + color + ' bg-logy-' + color} />

			<div className='w-full'>
				{typeof data === 'string' ? (
					<h1 className='text-white text-lg font-semibold'>{data}</h1>
				) : (
					<div className='tree-view'>
						<JSONTree
							data={data}
							theme={theme}
							hideRoot={true}
							collectionLimit={10}
						/>
					</div>
				)}

				<span className='text-[#aaa] font-normal mt-2 block'>
					<a
						className='underline text-lg'
						onClick={() =>
							openFile(`${backTrace.fileName}:${backTrace.lineNumber}`)
						}
					>
						{getFilename(backTrace.fileName)}:{backTrace.lineNumber}
					</a>
				</span>
			</div>
		</motion.div>
	);
};

export default ItemDebug;
