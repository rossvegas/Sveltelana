<script lang="ts">
	import type { Store } from './../models/Store';
	import { stores, currentStore } from './../dataStorage';

	let tempTable;
	function selectStore(store: Store) {
		$currentStore = store;
	}
</script>

<svelte:head>
	<title>Stores</title>
</svelte:head>

<h2>Stores:</h2>
<ul>
	<!--Accessing $stores is a shortcut to the stores inside the writeable, remove the $ and you will see the Writable<Store[]>-->
	{#each $stores as table}
		<div>
			<li>
				<!-- this is an example of calling a method with a parameter-->
				<a href="order" on:click={() => selectStore(table)}>
					{table.storeName}
				</a>
			</li>
		</div>
	{/each}
</ul>
