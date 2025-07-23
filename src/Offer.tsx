import React from 'react';
import type { EtsyItem } from './Types';


function Offer({ offer }: { offer: EtsyItem}) {
	console.log(offer);
	return (
	<div className="item">
	    <div className="item-image">
	      <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
	        <img src={offer.MainImage.url_570xN} />
	      </a>
	    </div>
	    <div className="item-details">
	      <p className="item-title">{truncateTitle(offer.title)}</p>
	      <p className="item-price">{getCurrencyCode(offer.currency_code)+ offer.price}</p>
	       <p className={`item-quantity ${getQuantityLevelClass(offer.quantity)}`}>
        {offer.quantity}
      </p>
	    </div>
	</div>
  	);
}

function truncateTitle(title: string, maxLength: number = 50): string {
  if (title.length <= maxLength) {
    return title;
  }
  return title.slice(0, maxLength) + '…';
}

function getCurrencyCode(currencyCode: string): string {
	if (currencyCode === "USD") {
		return "$"
	}else if (currencyCode === "EUR") {
		return "€"
	}else {
		return "GBP"
	}
}

function getQuantityLevelClass(quantity: number): string {
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
}

export default Offer;