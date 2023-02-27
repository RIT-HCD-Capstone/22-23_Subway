<script lang="ts">
	/** @type {import('./$types').PageData} */ export let data: any[];
</script>

<aside>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</aside>

<main>
	{#each data as item}
		<!-- <h1>{data.post2}</h1> -->
		<div>{@html item}</div>
	{/each}
</main>
