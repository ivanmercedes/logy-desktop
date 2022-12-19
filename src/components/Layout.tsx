import ButtonNav from './ButtonNav';
import { useAppContext } from '../context/app-context/app-provider';
import SettingContainer from '../containers/SettingContainer';

function Layout({ children }: any) {
	const { onCleanLogs, onShowSettings } = useAppContext();

	return (
		<div className='bg-logy-browm h-screen'>
			<header className='max-w-[1144px] w-full m-auto p-5 flex items-center justify-between'>
				<button onClick={onShowSettings}>
					<img src='setting.svg' title='setting' />
				</button>

				<div className='text-white flex gap-3'>
					<ButtonNav color='border-logy-green' />
					<ButtonNav color='border-logy-yellow' />
					<ButtonNav color='border-logy-red' />
					<ButtonNav color='border-logy-blue' />
				</div>

				<button
					onClick={onCleanLogs}
					className='text-white flex items-center gap-3'
				>
					<img src='clean.svg' className='w-[30px]' title='clean logs' />
				</button>
			</header>

			<div className='max-w-[1144px]  m-auto p-5 flex flex-col gap-5'>
				{children}
			</div>

			<SettingContainer />
		</div>
	);
}

export default Layout;
