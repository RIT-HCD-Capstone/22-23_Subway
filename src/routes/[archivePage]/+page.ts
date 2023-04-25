import type { Artifact, Era } from "$lib/Types";
import type { PageLoad } from "./$types";


export const load = (async ({ fetch, params }) => {
  const res = await fetch('assets/sources.json')
  let sources: Artifact[] = await res.json()
  console.log(sources)

  if (params.archivePage === 'archive') {
    return { sources: sources }
  }

  /** each Era individually */
  switch (<Era>params.archivePage) {
    case 'Subway':
      sources = sources.filter(source => source.era === 'Subway (1920s-1950s)')
      return { sources: sources }
    case 'Canal':
      sources = sources.filter(source => source.era === 'Canal (1822-1919)')
      return { sources: sources }
    case 'Graffiti':
      sources = sources.filter(source => source.era === 'Graffiti (1984-2023)')
      return { sources: sources }
    case 'Future':
      sources = sources.filter(source => source.era === 'Future')
      return { sources: sources }
  }


  return { sources: sources }
}) satisfies PageLoad;
