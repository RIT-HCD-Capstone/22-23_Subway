<script lang="ts">
	import type { Era } from '$lib/Types';

	export let era: Era;

	function eraImage(era: Era): string {
		switch (era) {
			case 'Canal':
				return 'assets/eras/Canal/Canal_Illustration_CourtStBridge.jpeg';
			case 'Subway':
				return 'assets/eras/Subway/Aqueduct 1924 interior.jpg';
			case 'Graffiti':
				return 'assets/eras/Graffiti/Rochester_Subway_east_end_filled_in,2016.jpg';
			case 'Future':
				return 'assets/eras/Future/rochester-lowline-path.jpg';
		}
	}
</script>

<a
	class="group flex justify-center items-center relative w-24 h-24 rounded-md border-2 border-white hover:border-brandRed"
	href="/{era}"
>
	<img
		src={eraImage(era)}
		alt="hero header background"
		class="absolute min-w-full -z-10 overflow-clip h-full object-cover grayscale group-hover:grayscale-0"
	/>
	<h4 class="text-white font-extrabold">{era}</h4>
</a>
