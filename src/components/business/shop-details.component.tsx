import {type FC} from "react";
import type {ShopSlug} from "@models/shop.model.ts";
import {useQuery} from "@tanstack/react-query";
import {ShopService} from "@services/shop.service.ts";
import {ErrorComponent} from "@components/ui/error.component.tsx";
import {FormInputComponent} from "@components/ui/form-input.component.tsx";

type Props = {
	shopSlug: ShopSlug;
};

const ShopDetailsComponent: FC<Props> = ({shopSlug}) => {
	const {data: shop, error, isLoading} = useQuery({
		queryKey: ["shop", shopSlug],
		queryFn: () => ShopService.getShop(shopSlug)
	});

	if (error) {
		return (<ErrorComponent error={error}/>);
	}

	if (isLoading) {
		return (<div className="skeleton size-80"/>);
	}

	if (!shop) {
		return (<div className="size-80 text-center mx-auto">Aucune donnée magasin</div>);
	}

	return (
		<div className="flex flex-col gap-8">
			<h2 className="text-center text-2xl font-bold">Magasin {shop.name}</h2>
			<div className="flex flex-row gap-8">
				<div className="flex flex-col gap-4 w-full max-w-xs">
					<span className="font-bold border-b">Données générales</span>
					<FormInputComponent label="ID" value={shop.id}/>
					<FormInputComponent label="Nom" value={shop.name}/>
					<FormInputComponent label="Slug" value={shop.slug}/>
				</div>
				<div className="flex flex-col gap-4 w-full max-w-xs">
					<span className="font-bold border-b">Adresse</span>
					<FormInputComponent label="Ligne 1" value={shop.address.line1}/>
					{shop.address.line2 && <FormInputComponent label="Ligne 2" value={shop.address.line2}/>}
					{shop.address.line3 && <FormInputComponent label="Ligne 3" value={shop.address.line3}/>}
					<FormInputComponent label="Code postal" value={shop.address.postalCode}/>
					<FormInputComponent label="Commune" value={shop.address.locality}/>
				</div>
				<div className="flex flex-col gap-4 w-full max-w-xs">
					<span className="font-bold border-b">Contact</span>
					<FormInputComponent label="Téléphone" value={shop.contact.phone}/>
					<FormInputComponent label="Email" value={shop.contact.email}/>
				</div>
				<div className="flex flex-col gap-4 w-full max-w-xs">
					<span className="font-bold border-b">Horaires</span>
					{shop.openingHours?.length && shop.openingHours.map((hour, index) => (
						<FormInputComponent key={index} value={hour}/>
					))}
				</div>
			</div>
		</div>
	);
};

export {ShopDetailsComponent};