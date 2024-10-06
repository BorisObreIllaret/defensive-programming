import {type FC} from "react";

type Props = {
	label?: string;
	value?: string | number | readonly string[] | undefined;
};

const FormInputComponent: FC<Props> = ({label, value}) => {
	return (
		<div className="flex flex-col gap-2">
			{label && <span className="font-bold">{label}</span>}
			<input type="text"
			       className="input input-bordered"
			       placeholder={label}
			       readOnly={true}
			       value={value}/>
		</div>
	);
};

export {FormInputComponent};