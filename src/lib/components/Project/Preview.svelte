<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		title,
		slug,
		image_src,
		description
	}: { title: string; slug: string; image_src: string; description: string } = $props();
</script>

<a href={slug} transition:fade>
	<img alt={title} src={image_src} />
	<div class="text-wrapper">
		<h2>
			{title}
		</h2>
		<div class="description">
			{@html description}
		</div>
	</div>
</a>

<style lang="postcss">
	a {
		display: block;
		width: 100%;
		transition: opacity 400ms ease-out;

		&:hover {
			opacity: 0.75;
		}
	}

	img {
		width: 100%;
	}

	.text-wrapper {
		width: 100%;
		padding-top: 1rem;

		@media (--tablet) {
			display: flex;
			padding-top: 1.5rem;
		}

		@media (--desktop) {
			display: block;
			width: 75%;
		}
	}

	h2 {
		width: 100%;
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;
		color: var(--dark);
		font-family: var(--tenon);

		@media (--tablet) {
			font-size: var(--2xl);
			font-weight: 400;
			width: 50%;
		}

		@media (--desktop) {
			width: 100%;
		}
	}

	.description {
		width: 100%;
		padding-top: 0.5rem;
		font-size: var(--base);
		line-height: 1.5;
		opacity: 0.75;
		color: var(--dark);

		@media (--tablet) {
			padding-top: 0;
			width: 50%;
			margin-left: 1rem;
		}

		@media (--desktop) {
			margin-top: 0.5rem;
			width: 100%;
			margin-left: 0;
		}
	}
</style>
