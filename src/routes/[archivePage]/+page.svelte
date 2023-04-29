<script lang="ts">
	import { page } from '$app/stores';
	import ArtifactCard from '$lib/ArtifactCard.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
	onMount(async () => {
		goto(`/${$page.route.id}`);
	});
</script>

<main class="pt-24 mx-4">
	<h1 class="text-3xl text-black font-bold font-display">
		{$page.params.archivePage.toUpperCase()}
	</h1>
	<div class="flex flex-row justify-center items-start flex-wrap gap-4">
		{#each data.sources as source}
			<ArtifactCard
				filename={source.filename}
				fileExtension={source.fileExtension}
				title={source.title}
				shortDescription={source.shortDescription}
				longDescription={source.longDescription}
				tags={source.tags}
				era={source.era}
				year={source.year}
				date={source.date}
				externalSource={source.externalSource}
				contributors={source.contributors}
				publisher={source.publisher}
				citation={source.citation}
			/>
		{/each}
	</div>
</main>
