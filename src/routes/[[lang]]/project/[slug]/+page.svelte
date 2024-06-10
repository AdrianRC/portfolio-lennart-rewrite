<script lang="ts">
	import Blocks from '$lib/components/Project/Blocks.svelte';
	import Header from '$lib/components/Project/Header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Blocks blocks={data.blocks} />

{#if next_project}
	<a href={next_project.slug} class="project-link">
		<hr />
		<h3>
			{language === 'de' ? 'Nächstes Projekt' : 'Next project'}
		</h3>
		<Header />
	</a>
{/if}

<style lang="postcss">
	.project-link {
		margin-left: 2rem;
	}

	hr {
		margin-top: 3rem;
		border: 1px solid var(--light);

		@media (--tablet) {
			margin-top: 4rem;
		}

		@media (--desktop) {
			margin-top: 10rem;
		}
	}

	h3 {
		padding: 1.5rem 0;
		font-size: var(--base);
		line-height: 1.5;
		color: var(--mid);

		@media (--tablet) {
			padding-bottom: 2rem;
		}

		@media (--desktop) {
			padding-bottom: 6rem;
		}
	}
</style>
