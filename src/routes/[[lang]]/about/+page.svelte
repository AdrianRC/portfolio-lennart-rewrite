<script lang="ts">
	let {
		qualities = [],
		headline,
		image_src,
		description,
		cta_link,
		cta_title,
		cta_text
	}: {
		qualities: Array<{ description: string; title: string }>;
		headline: string;
		image_src: string;
		description: string;
		cta_link: string;
		cta_text: string;
		cta_title: string;
	} = $props();

	import Quality from '$lib/components/Content/Quality.svelte';
	import ActionCall from '$lib/components/Content/ActionCall.svelte';
</script>

<div class="text-wrapper">
	<h1 class="headline">
		{headline}
	</h1>
	<div class="description">
		{@html description}
	</div>
</div>
<div class="about">
	<img src={image_src} alt="Lennart Basler" />
	<div class="qualities-wrapper">
		{#each qualities as { description, title } (title)}
			<div class="quality-wrapper">
				<Quality {description} {title} />
			</div>
		{/each}
	</div>
</div>
<ActionCall link="contact/" heading={cta_title} link_text={cta_text} />

<style lang="postcss">
	.text-wrapper {
		@media (--desktop) {
			width: 60%;
		}
	}

	.about {
		margin-top: 2rem;

		@media (--tablet) {
			margin-top: 3rem;
		}

		@media (--desktop) {
			margin-top: 6rem;
			display: flex;
			align-items: center;
		}

		& img {
			width: 100%;

			@media (--tablet) {
				height: 30rem;
				width: auto;
				margin: 0 auto;
			}

			@media (--desktop) {
				width: 50%;
				height: auto;
				margin: 0;
			}
		}
	}

	.qualities-wrapper {
		margin-top: 2rem;

		@media (--tablet) {
			margin-top: 3rem;
		}

		@media (--desktop) {
			width: 50%;
			margin: 0 0 0 6rem;
		}
	}

	.quality-wrapper {
		margin-top: 1.5rem;

		@media (--tablet) {
			margin-top: 2rem;
		}
	}
</style>
