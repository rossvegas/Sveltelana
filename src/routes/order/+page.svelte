<script lang="ts">
	import { currentStore, inventory } from '../../dataStorage';
	import InventoryComponent from '../../components/inventory.svelte';
	import PurchaseComponent from '../../components/purchaseItem.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	//this little trick navigates home if the current store is null, this might happen if you refresh the page
	onMount(() => {
		if ($currentStore == undefined) goto('/');
	});
</script>

<svelte:head>
	<title>Order</title>
</svelte:head>

<!--This is an example of using if to hide some html from the UI, in this case current store may be null so we cannot 
	render this section if it is-->
{#if $currentStore != undefined}
	<h2>Store: {$currentStore.storeName}</h2>

<!--This is an example of iterating through a list and binding to a component the properties are exported on the components -->
	{#each $inventory as inv}
		<InventoryComponent bind:inventoryItem={inv} bind:store={$currentStore} />
	{/each}

	<h3>Currently Ordered</h3>

	{#each $currentStore.order as orderItem}
		<PurchaseComponent bind:lineItem={orderItem} bind:store={$currentStore} />
	{/each}

	<h3>Total Price</h3>
	<h4>${$currentStore.totalPrice}</h4>
{/if}
