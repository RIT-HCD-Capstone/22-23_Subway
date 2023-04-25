<script lang="ts">
	import type { Era } from '$lib/Types';
	import '../app.css';

	let eras: Era[] = ['Canal', 'Subway', 'Graffiti', 'Future'];
</script>

<nav
	class="flex flex-row w-full h-16 fixed p-4 text-white space-x-4 py-10 bg-slate-800/80 justify-start items-center transition-colors duration-200 ease-in-out"
>
	<a href="/">
		<img src="assets/logo/Color_bg_logo.png" alt="Subway Archive Logo" class="w-16" />
	</a>
	<div class="group relative p-6 hover:text-brandRed hover:bg-brandBlue cursor-pointer">
		Eras
		<div
			class="flex flex-col invisible group-hover:visible group-hover:text-white absolute top-16 left-0"
		>
			{#each eras as era}
				<a
					href={era}
					class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
					>{era}</a
				>
			{/each}
		</div>
	</div>
	<a href="/archive" class="p-6 hover:text-brandRed hover:bg-brandBlue">Archive</a>
	<a href="/" class="p-6 hover:text-brandRed hover:bg-brandBlue">Explore</a>
</nav>

<slot />
