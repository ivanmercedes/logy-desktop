import { memo } from 'react';

export interface buttonNavProps {
	color?: string;
}

function ButtonNav({ color }: buttonNavProps) {
	return (
		<button
			className={' min-w-[48px] h-12 border-[10px] rounded-full ' + color}
		></button>
	);
}

export default memo(ButtonNav);
