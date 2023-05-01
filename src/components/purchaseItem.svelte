<script lang="ts">
	//This is very similar to inventory.svelte see is for more notes
	import type { LineItem } from '../models/LineItem';
	import type { Store } from '../models/Store';
	import { inventory } from '../dataStorage';
	export let store: Store;
	export let lineItem: LineItem;

	//This function uses the array.find method to look up an inventory if it is found return the title 
	function GetOrderName(inventoryId: number) {
		let inv = $inventory.find((inv) => inv.inventoryId == inventoryId);
		//if the item is found in inventory return the catalogue otherwise undefined
		return inv?.title;
	}

	function DecrementQty() {
		store.RemoveItem(lineItem);
		lineItem.qty = lineItem.qty;
	}

	function IncrementQty() {
		store.AddItem(lineItem);
		lineItem.qty = lineItem.qty;
	}
</script>

<div class="order">
	<span>{GetOrderName(lineItem.inventoryId)}</span>
	<div>
		<!--This is an example of using a lambda in the on click its not necessary because there are no arguments for the decrement
		qty method but you can do it this way-->
		<button on:click={() => DecrementQty()}>-</button>
		<span>{lineItem.qty}</span>
		<button on:click={() => IncrementQty()}>+</button>
	</div>
</div>

<style>
	.order {
		border: 1px solid lightgray;
		margin: 16px;
		padding: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.order button {
		padding: 0px 8px 2px 8px;
		margin: 4px;
	}
</style>
