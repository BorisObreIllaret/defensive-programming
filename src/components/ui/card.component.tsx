import {type FC, type PropsWithChildren, type ReactNode} from "react";

type CardProps = PropsWithChildren<{
	header?: ReactNode;
}>;

const Card: FC<CardProps> = ({header, children}) => {
	return (
		<div className="card">
			{header && <div className="card-title">{header}</div>}
			<div className="card-body">
				{children}
			</div>
		</div>
	);
};

export {Card};