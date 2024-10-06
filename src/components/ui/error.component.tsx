import {type FC} from "react";

type Props = {
	error?: Error|null;
};

const ErrorComponent: FC<Props> = ({error}) => {
	if (!error) return null;
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="mockup-code">
				<pre className="bg-error text-error-content"><code>Une erreur a été levée lors de la lecture des magasins</code></pre>
				<pre><code>{error.message}</code></pre>
			</div>
		</div>
	);
};

export {ErrorComponent};