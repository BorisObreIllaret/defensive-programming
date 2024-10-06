import {type FC, type PropsWithChildren} from "react";

const DividerComponent: FC<PropsWithChildren> = ({children}) => {
	return (
		<div className="divider">{children}</div>
	);
};

export {DividerComponent};