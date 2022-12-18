import Drawer from '../components/Drawer';
import { useAppContext } from '../context/app-context/app-provider';
import '../style/style.css';

const SettingContainer = () => {
	const { onShowSettings, showSettings } = useAppContext();

	return (
		<Drawer
			setIsOpen={onShowSettings}
			isOpen={showSettings}
			title='Setting'
			className='p-5'
		>
			<div className='py-5 flex flex-col gap-5'>
				<div className='checkbox-wrapper-40'>
					<fieldset className='flex items-center gap-3'>
						<input name='keep' id='keep' type='checkbox' />
						<label htmlFor='keep' className='text-xl'>
							Keep on top
						</label>
					</fieldset>
				</div>

				<fieldset className='flex flex-col'>
					<label
						htmlFor='shorcut'
						className='text-lg font-light leading-10 tracking-widest'
					>
						Show and Hide shortcut
					</label>
					<input
						id='shortcut'
						type='text'
						placeholder='Shift + Window + L'
						className='font-semibold max-w-[400px] p-2 rounded-xl bg-logy-card outline-none'
					/>
				</fieldset>
			</div>

			<button className='bg-logy-orange p-2 w-[150px] rounded-2xl text-logy-browm font-bold'>
				Save
			</button>
		</Drawer>
	);
};

export default SettingContainer;
