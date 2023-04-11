<script lang="ts">
	import EraCard from '$lib/EraCard.svelte';
	import TeamMember from '$lib/TeamMember.svelte';
	import type { Era } from '$lib/Types';

	let eras: Era[] = ['Pre-Canal', 'Canal', 'Subway', 'Abandoned', 'Graffiti', 'Future', 'Unknown'];
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
			The Rochester Subway Archive is a digital collection of historical information and artifacts
			related to the Rochester Subway, a now-defunct underground rail system that operated in
			Rochester, New York from 1927 to 1956.
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
				Overall, the Rochester Subway Archive is a valuable resource for anyone interested in the
				history of Rochester or the evolution of urban transportation systems more broadly.</b
			>
		</p>
		<div class="flex flex-row flex-wrap gap-4 justify-around items-center">
			{#each eras as era}
				<EraCard {era} />
			{/each}
		</div>
		<h3>IMPORTANCE</h3>
		<p>
			Graffiti played a role in the culture of the Rochester Subway, and there are several examples
			of graffiti art preserved in the Rochester Subway Archive. As an abandoned and largely
			overlooked public space, the subway tunnels became a canvas for graffiti artists who used the
			blank walls and surfaces to showcase their art.
		</p>
		<p>
			The graffiti in the Rochester Subway reflects the broader cultural trends of the time period,
			including the rise of hip hop culture, street art, and political activism. Some of the
			graffiti in the Archive depicts political slogans and social commentary, while other examples
			feature more stylized designs and lettering.
		</p>
		<p>
			The graffiti art in the Archive also provides a window into the underground culture of the
			subway during its heyday, as well as the subculture of graffiti artists and their role in the
			urban landscape. The Archive includes photos and videos of the graffiti art, as well as
			interviews with former subway riders and graffiti artists who reflect on the impact of the art
			and its place in the cultural history of Rochester.
		</p>
		<p>
			Overall, the graffiti in the Rochester Subway Archive is a fascinating and valuable cultural
			artifact that offers insight into the broader trends of the time period, as well as the unique
			subculture of the Rochester Subway.
		</p>
		<h3>ABOUT</h3>
		<p>
			The goals of a project can vary widely depending on the context and the needs of the
			stakeholders involved. Some common reasons for starting a project might include developing a
			new product or service, improving an existing process or system, launching a marketing
			campaign, implementing new technology, conducting research or experimentation, building
			infrastructure, or addressing a social or environmental issue.
		</p>
		<p>
			Effective project management involves careful planning, execution, and monitoring of project
			activities, as well as effective communication and collaboration among team members and
			stakeholders. Projects can be complex and challenging, but when successfully executed, they
			can lead to significant benefits and positive outcomes.
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
