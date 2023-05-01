<!-- https://www.youtube.com/watch?v=UU7MgYIbtAk -->
<script lang="ts">
	import Nav from '../components/nav.svelte';
	import { onMount } from 'svelte';
	import { Data } from '../dataInit';

	//This on mount is run when this main layout is rendered. I am just using it to populate some temporary data
	onMount(() => {
		let data = new Data();
		data.SetupData();
	});
</script>

<h1>Rosco's Logistics</h1>

<div>
	<!--This contains the navigation and a slot where the pages of the application we be rendered, 
		anything here like the nav will be shown on every page-->
	<Nav />
	<slot />
</div>
