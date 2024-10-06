import type {Shop, ShopSlug} from "@models/shop.model.ts";

const getShop = async (slug: ShopSlug): Promise<Shop|undefined> => {
	if (!slug) return undefined;
	const fileName = `../data/shops/${slug}.data.json`;
	const json = await import(/* @vite-ignore */ fileName) as unknown;
	if (!json) return undefined;
	return json as Shop;
};

const getShops = async (): Promise<ShopSlug[]> => {
	const json = await import("@data/shops/list.data.json") as { shops: ShopSlug[] };
	return json.shops;
};

export const ShopService = {
	getShop,
	getShops,
};