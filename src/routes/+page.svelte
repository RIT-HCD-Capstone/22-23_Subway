<script lang="ts">
	import EraCard from '$lib/EraCard.svelte';
	import TeamMember from '$lib/TeamMember.svelte';
	import type { Era } from '$lib/Types';

	let eras: Era[] = ['Canal', 'Subway', 'Graffiti', 'Future'];
</script>

<svelte:head>
	<title>Rochester Subway Archive</title>
	<meta property="og:title" content="Rochester Subway Archive" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rochester-subway-archive.jcleme.dev/" />
	<meta property="og:image" content="https://rochester-subway-archive.jcleme.dev/hero.png" />
</svelte:head>

<div class="min-w-full overflow-clip h-screen">
	<img
		src="assets/hero.png"
		alt="hero header background"
		class="absolute min-w-full -z-10 overflow-clip h-screen object-cover"
	/>
	<section
		class="flex flex-col justify-start items-start m-auto max-w-[80vw] max-h-[80vh] pt-20 text-white"
	>
		<div class="self-end">
			<h2 class="font-body text-5xl leading-snug font-bold text-brandYellow">CULTURE</h2>
			<h2 class="font-body text-5xl leading-snug font-bold text-brandRed">CONNECTION</h2>
			<h2 class="font-body text-5xl leading-snug font-bold text-brandTeal">CREATION</h2>
		</div>
		<h1 class="row-start-2 text-6xl max-w-mdfont-semibold font-display justify-center">
			ROCHESTER SUBWAY ARCHIVE
		</h1>
		<p class="max-w-[65ch] mt-4">
			The Rochester Subway is a now-defunct underground rail system that operated in Rochester, New
			York from 1927 to 1956. The Rochester Subway Archive is a digital collection to preserve the
			history of the Rochester Subway from its inception to its modern day usage as a haven for
			graffiti artists.
		</p>
		<p class="max-w-[65ch] mt-4">
			The Archive includes a wide range of materials, including photographs, maps, videos, and
			articles.
		</p>
	</section>
</div>
<main class="flex flex-col justify-center items-center my-8 mx-4">
	<div class="max-w-[85ch] space-y-8">
		<p>
			Visitors to the site can explore the history of the Subway, learn about the different stations
			and routes, and see what the system looked like when it was in operation. The Archive also
			features personal stories and reminiscences from people who rode the Subway or worked on it,
			providing a unique window into what life was like in Rochester in the mid-20th century.
		</p>
		<p>
			<b>
				The Rochester Subway Archive is a valuable resource for anyone interested in the history of
				Rochester or the evolution of modern graffiti.</b
			>
		</p>
		<div class="flex flex-row flex-wrap gap-4 justify-around items-center">
			{#each eras as era}
				<EraCard {era} />
			{/each}
		</div>
		<h3>IMPORTANCE</h3>
		<p>
			Much of the original Rochester Subway has been demolished or filled in with no trace that it
			was ever there to begin with. Not only was the subway a means of transportation, but in its
			later years it was also a gathering place for artists in the community. Through the walls of
			the abandoned subway art has emerged, fighting for social justice, togetherness, and has
			culminated into a unique ‘Rochester Style’ of Graffiti.
		</p>
		<p>
			The Rochester Subway Archive team is a group of seniors from the Rochester Institute of
			Technology in the Humanities Computing and Design Major. Led by Dr. Jessica Leiberman who is
			an advisor to the city on the historical relevance of the subway, the team has worked to
			create an easy to navigate look into the rich history of The Rochester Subway.
		</p>
		<h3>Team</h3>
		<div class="grid grid-cols-3 gap-4">
			<TeamMember name="Josh Clemens" role="Website & Database Developer Project Manager" />
			<TeamMember name="Tyler Palmiter" role="Content Writer & Sourcing" />
			<TeamMember name="Zoë Zapata" role="UI/UX Designer" />
			<TeamMember name="Lindsay Behrens" role="Contributor" />
			<TeamMember name="Wentao Zhao" role="Contributor" />
		</div>
	</div>
</main>
