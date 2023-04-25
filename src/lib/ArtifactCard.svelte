<script lang="ts">
	import { onMount } from 'svelte';
	import type { LongEra } from './Types';

	export let filename: string;
	export let fileExtension: string;
	export let title: string;
	export let shortDescription: string;
	export let longDescription: string;
	export let tags: string;
	export let era: LongEra;
	export let year: number;
	export let date: string;
	export let externalSource: string;
	export let contributors: string;
	export let publisher: string;
	export let citation: string;

	let thisEra: string;
	function eraToString(era: LongEra): string {
		console.log('calling thisEra');
		switch (era) {
			case 'Canal (1822-1919)':
				return 'Canal';
			case 'Graffiti (1984-2023)':
				return 'Graffiti';
			case 'Subway (1920s-1950s)':
				return 'Subway';
			case 'Future':
				return 'Future';
		}
	}

	onMount(() => {
		console.log('the component has mounted');
		thisEra = eraToString(era);
	});
</script>

<div class="border-2 border-black p-4 w-80 h-80">
	<img src="assets/eras/{thisEra}/{filename}{fileExtension}" alt={filename} class="w-64 h-64" />
	<h1>{title}</h1>
</div>
