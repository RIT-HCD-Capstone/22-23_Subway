<script>
	import '../app.css';
</script>

<nav
	class="flex flex-row w-full h-16 fixed p-4 text-white space-x-4 py-10 bg-slate-600/20 justify-start items-center transition-colors duration-200 ease-in-out"
>
	<img src="assets/logo/Color_bg_logo.png" alt="Subway Archive Logo" class="w-16" />
	<div class="group relative p-6 hover:text-brandRed hover:bg-brandBlue cursor-pointer">
		Eras
		<div
			class="flex flex-col invisible group-hover:visible group-hover:text-white absolute top-14 left-0"
		>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Pre-Canal</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Canal</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Subway</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Abandoned</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Graffiti</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Futures</a
			>
			<a
				href="/"
				class="hidden group-hover:block hover:text-brandRed group-hover:bg-brandBlue group-hover:p-4"
				>Unknown</a
			>
		</div>
	</div>
	<a href="/" class="p-6 hover:text-brandRed hover:bg-brandBlue">Archive</a>
	<a href="/" class="p-6 hover:text-brandRed hover:bg-brandBlue">Explore</a>

	<div
		class="w-max bg-white text-black p-2 m-4 rounded-md justify-self-end flex flex-row space-x-2 cursor-text"
	>
		<img src="assets/icons/search.svg" alt="Search icon" /> searchbar
	</div>
</nav>

<slot />
