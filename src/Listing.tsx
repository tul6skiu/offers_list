import React from 'react';
import type { EtsyItem } from './Types';
import Offer from './Offer';


type Props = {
  items?: EtsyItem[];
};

function Listing({ items = [] }: Props) {
	if (!items?.length) {
	return <p>Список пуст</p>;
	}

	const filteredItems = items.filter(
	item => item.MainImage && item.MainImage.url_570xN
	);

	return (
		<div class="item-list">
		    {filteredItems.map(item => (
		        <Offer key={item.listing_id} offer={item} />
		    ))}
		</div>
	);
}

export default Listing;