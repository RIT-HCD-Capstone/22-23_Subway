<script lang="ts">
	import type { Artifact } from '$lib/models/artifact';

	export let data: Artifact[];
</script>

<aside>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</aside>

<main>
	{#each data as item}
		<!-- <h1>{data.post2}</h1> -->
		<div>{item.fileName}</div>
	{/each}
</main>
