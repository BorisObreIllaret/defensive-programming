import {type FC, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {ShopService} from "@services/shop.service.ts";
import {ErrorComponent} from "@components/ui/error.component.tsx";
import type {ShopSlug} from "@models/shop.model.ts";
import {DividerComponent} from "@components/ui/divider.component.tsx";
import {ShopDetailsComponent} from "./shop-details.component";
import {cn} from "@shared/utils.ts";

const ShopsListComponent: FC = () => {
	const {data: shops, error, isLoading} = useQuery({
		queryKey: ["shops"],
		queryFn: ShopService.getShops
	});

	const [selectedShop, setSelectedShop] = useState<ShopSlug | null>(null);

	if (error) {
		return (<ErrorComponent error={error}/>);
	}

	const handleShopClick = (shopSlug: ShopSlug): void => {
		setSelectedShop(shopSlug);
	};

	return (
		<section className="flex flex-col gap-4 justify-center">
			<h1 className="text-center text-3xl font-bold">Liste des magasins</h1>
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
								<tr className={cn("cursor-pointer", selectedShop === shop && "bg-neutral-200")}
								    key={shop}
								    onClick={() => handleShopClick(shop)}>
									<td>{shop}</td>
								</tr>
							))}
						</tbody>
					</table>
				}
			</div>
			<DividerComponent/>
			{selectedShop && <ShopDetailsComponent shopSlug={selectedShop}/>}
		</section>
	);
};

export {
	ShopsListComponent
};