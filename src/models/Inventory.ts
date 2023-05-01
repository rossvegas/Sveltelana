
export class InventoryItem {
	constructor(inventoryId: number, title: string, description: string, price: number) {
		this.inventoryId = inventoryId;
		this.title = title;
		this.description = description;
		this.price = price;
	}
	inventoryId: number = 0;
	title: string = '';
	description: string = '';
	price: number = 0;
}
