<script lang="ts">
	import type { Era } from '$lib/Types';

	export let era: Era;

	function eraImage(era: Era): string {
		switch (era) {
			case 'Pre-Canal':
				return 'assets/hero.png';
			case 'Canal':
				return 'assets/hero.png';
			case 'Subway':
				return 'assets/hero.png';
			case 'Abandoned':
				return 'assets/hero.png';
			case 'Graffiti':
				return 'assets/hero.png';
			case 'Future':
				return 'assets/hero.png';
			case 'Unknown':
				return 'assets/hero.png';
		}
	}
</script>

<a
	class="flex justify-center items-center relative w-24 h-24 rounded-md border-2 border-white hover:border-brandRed"
	href="/{era}"
>
	<img
		src={eraImage(era)}
		alt="hero header background"
		class="absolute min-w-full -z-10 overflow-clip h-full object-cover"
	/>
	<h4 class="text-white">{era}</h4>
</a>
