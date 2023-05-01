import { inventory } from "../dataStorage";
import type { LineItem } from "./LineItem";
import { get } from 'svelte/store';

export class Store {
	constructor(storeName: string) {
		this.storeName = storeName;
	}

	storeName: string;
	order: Array<LineItem> = new Array<LineItem>();
	totalPrice: number = 0;

	//This allows adding items to the store, we are going to try and find it first and increment the qty if found otherwise we well add it
	AddItem(item: LineItem) {
		let existingItem = this.order.find((p) => p.inventoryId == item.inventoryId);
		if (existingItem == undefined) {
			//this takes our passed in item and pushes it onto the end of the array
			this.order.push(item);
		} else {
			existingItem.qty++;
		}
		this.SetTotalPrice();
	}

	RemoveItem(item: LineItem) {
		//removing the item just decrements the qty if there are more than 0
		if (item.qty > 0) {
			item.qty--;
		}
		this.SetTotalPrice();
	}

	//This is an example of having to lookup related objects by id to get some information. This one uses the inventory id 
	//to look up the inventory item and get the price off if, we also demonstrate adding to the total before setting the 
	//UI bound totalPrice variable, setting the variable at the end may give better performance because we are setting the 
	//bound variable only once
	SetTotalPrice() {
		let total: number = 0;
		this.order.forEach(item => {
			//This get allows us to retrieve the inventory from the writable, on the UI we use the $ prefix
			var price = get(inventory).find(i => i.inventoryId == item.inventoryId)?.price;
			//if the price cannot be found it will be undefined we use the null coalesce operator to return 0 if it is.
			total = total + item.qty * (price ?? 0);
		});
		this.totalPrice = total;
	}
}

