export type ShopId = string;
export type ShopName = string;
export type ShopSlug = string;

export type Address = {
	line1: string;
	line2?: string;
	line3?: string;
	postalCode: string;
	locality: string;
}

export type Contact = {
	phone: string;
	email: string;
}

export type OpeningHours = string[];

export type Shop = {
	id: ShopId;
	name: ShopName;
	slug: ShopSlug;
	address: Address;
	contact: Contact;
	openingHours: OpeningHours;
}