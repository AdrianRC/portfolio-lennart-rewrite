<script lang="ts">
	import Preview from './Preview.svelte';

	interface ProjectPreview {
		slug: string;
		title: string;
		image_src: string;
		description: string;
	}

	let { projects }: { projects: Array<ProjectPreview> } = $props();
</script>

<div class="wrapper">
	{#each projects as { slug, title, image_src, description } (title)}
		<Preview {description} {slug} {title} {image_src} />
	{/each}
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		padding-top: 2rem;

		@media (--tablet) {
			padding-top: 4rem;
			gap: 4rem;
		}

		@media (--large) {
			padding-top: 10rem;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 4rem;
			row-gap: 6rem;
		}
	}
</style>
