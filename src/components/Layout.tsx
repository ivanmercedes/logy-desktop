import { AnimatePresence, motion } from 'framer-motion';
import ButtonNav from './ButtonNav';
import { useAppContext } from '../context/app-context/app-provider';
import SettingContainer from '../containers/SettingContainer';

function Layout({ children }: any) {
	const { onCleanLogs, onShowSettings, onFilterLogs } = useAppContext();

	const colors = [
		{ name: 'green', boder: 'border-logy-green', bg: 'bg-logy-green' },
		{ name: 'yellow', boder: 'border-logy-yellow', bg: 'bg-logy-yellow' },
		{ name: 'red', boder: 'border-logy-red', bg: 'bg-logy-red' },
		{ name: 'blue', boder: 'border-logy-blue', bg: 'bg-logy-blue' },
	];

	const colorSelected: string[] = [];

	return (
		<div className=' h-screen'>
			<header className='max-w-[1144px] w-full m-auto p-5 flex items-center justify-between'>
				<button className='outline-none' onClick={onShowSettings}>
					<img src='setting.svg' title='setting' />
				</button>

				<div className='text-white flex gap-3'>
					{colors.map(color => (
						<ButtonNav
							key={`color-filter-${color.name}`}
							onClick={() => onFilterLogs?.(color.name)}
							color={`${color.boder} ${
								colorSelected?.includes(color.name) ? color?.bg : ''
							}`}
						/>
					))}
				</div>

				<button
					onClick={onCleanLogs}
					className='text-white flex items-center gap-3'
				>
					<img src='clean.svg' className='w-[30px]' title='clean logs' />
				</button>
			</header>
			<AnimatePresence>
				<motion.div
					layout
					className='max-w-[1144px]  m-auto p-5 flex flex-col gap-5'
				>
					{children}
				</motion.div>
			</AnimatePresence>

			<SettingContainer />
		</div>
	);
}

export default Layout;
