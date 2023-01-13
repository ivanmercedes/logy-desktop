import { memo } from 'react';

export interface buttonNavProps {
	color?: string;
	onClick?: () => void;
}

function ButtonNav({ color, onClick }: buttonNavProps) {
	return (
		<button
			onClick={onClick}
			className={'min-w-[48px] h-12 border-[10px] rounded-full ' + color}
		></button>
	);
}

export default memo(ButtonNav);
