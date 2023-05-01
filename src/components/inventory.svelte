<script lang="ts">
	//import type only if it is not newed up
	import type { InventoryItem } from '../models/Inventory';
	//we make a new line item below so this does not have a type
	import { LineItem } from '../models/LineItem';
	import type { Store } from '../models/Store';
	import PurchaseItem from './purchaseItem.svelte';

	//these variables allow attaching of the store and inventory item to the component.
	export let store: Store;
	export let inventoryItem: InventoryItem;

	function addItem() {
		//we create a line item for the order from the inventory item by using the inventory id, 
		//we could use a reference but this is an example if relating by an id which is equally valid
		let purchaseItem = new LineItem();
		purchaseItem.inventoryId = inventoryItem.inventoryId;
		purchaseItem.qty = 1;

		// we could have a function in this component to add the item to store, but instead we have a 
		// method in the store that allows adding of items, it is a bit more domain driven design in that regard 
		store.AddItem(purchaseItem);
		store.order = store.order;
	}
</script>

<div class="inv">
	<div>

		<div class="inv_title">{inventoryItem.title}</div>
		<div>{inventoryItem.description}</div>
		<div>${inventoryItem.price}</div>
	</div>
	<div>
		<!--This button click calls the function defined above, because it does not have any parameters
		we can use the short syntax and just use addItem in the on:click-->
		<button on:click={addItem}> Add Item </button>
	</div>
</div>

<style>
	.inv {
		border: 1px solid lightgray;
		margin: 16px;
		padding: 8px;
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
	.inv_title {
		font-weight: bold;
	}
</style>
