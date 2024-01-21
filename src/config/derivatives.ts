/*
 * ----- README -----
 * Thanks for considering adding to the derivatives page!!
 * To add to the page you can edit the JSON file below.
 * The `image` attribute is the only required one!
 * But you can also add a link to the `artist` (for example Twitter Account)
 * A link to the derivatives `post` on Twitter
 * The `id` of the uwucrew NFT that it is a derivative of
 * Please add new entries to the top of the JSON file.
 * Which will result in it being displayed at the top of the page
 */

import derivatives from "./derivatives.json";


export interface DerivativeType {
	image: string;
	artistName?: string;
	artistLink?: string;
	post?: string;
	id?: number;
	date?: string;
}