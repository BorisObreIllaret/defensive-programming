import {type FC} from "react";
import {useQuery} from "@tanstack/react-query";
import {ShopService} from "@services/shop.service.ts";

const ShopsListComponent: FC = () => {
	const {data: shops, error, isLoading} = useQuery({
		queryKey: ["shops"],
		queryFn: ShopService.getShops
	});

	if (error) {
		return (
			<div className="mockup-code">
				<pre className="bg-error text-error-content"><code>Une erreur a été levée lors de la lecture des magasins</code></pre>
				<pre><code>{error.message}</code></pre>
			</div>
		);
	}

	return (
		<section className="flex flex-col gap-4 justify-center">
			<h1 className="text-center text-2xl text-bold">Liste des magasins</h1>
			<div className="overflow-x-auto">
				{isLoading
					? <div className="skeleton size-80"/>
					: <table className="table max-w-80 mx-auto">
						<thead>
							<tr>
								<th>Magasin</th>
							</tr>
						</thead>
						<tbody>
							{(shops?.length) && shops.map(shop => (
								<tr>
									<td>{shop}</td>
								</tr>
							))}
						</tbody>
					</table>
				}
			</div>
		</section>
	);
};

export {
	ShopsListComponent
};