import {type FC, type ReactNode} from "react";

type CardProps = {
	header?: ReactNode;
	body: ReactNode;
}

const Card: FC<CardProps> = ({header, body}) => {
	return (
		<div className="card">
			{header && <div className="card-title">{header}</div>}
			<div className="card-body">
				{body}
			</div>
		</div>
	);
};

export {Card};