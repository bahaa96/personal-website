import { error } from '@sveltejs/kit';
import projects from '../../../lookups/projects.json'

/** @type {import('./$types').PageLoad} */
export function load({ params: { slug } }) {
  try {
    return projects[slug]
  } catch(e) {
    throw error(404, 'Not found');
  }

}