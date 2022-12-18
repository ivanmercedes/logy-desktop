import React from 'react';

export interface drawerProps {
	isOpen: boolean;
	setIsOpen: any;
	title?: string;
	children?: React.ReactNode;
	className?: string;
}

const Drawer = ({
	isOpen,
	setIsOpen,
	title,
	children,
	className,
}: drawerProps) => {
	return (
		<section
			className={`duration-500 ${
				isOpen
					? 'fixed top-0 min-w-full min-h-full bg-logy-browm transition-all text-white '
					: 'fixed top-0 min-w-full min-h-full bg-logy-browm transition-all translate-x-[100%]'
			}`}
		>
			<div className='h-[100px] p-3 max-w-[1144px] w-full m-auto flex items-center justify-between '>
				<button className='flex items-center gap-3' onClick={() => setIsOpen()}>
					<img src='arrow.svg' className='w-3' />
					<span className='text-2xl'>Back</span>
				</button>
				<h2 className='text-3xl font-bold'>{title}</h2>
				<span className='w-10'></span>
			</div>
			<div className={'px-5 max-w-[1144px] h-full m-auto ' + className}>
				{children}
			</div>
		</section>
	);
};

export default Drawer;
