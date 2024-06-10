<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		reverse,
		type,
		src,
		headline,
		split_equally,
		description
	}: {
		reverse: boolean;
		split_equally: boolean;
		type: 'video' | 'image';
		src?: string;
		headline?: string;
		description: string;
	} = $props();
</script>

<div class="wrapper" class:reverse transition:fade>
	{#if type === 'video'}
		<video {src} class:split-equally={split_equally} autoplay loop muted playsinline></video>
	{:else if type === 'image'}
		<img {src} alt={headline} />
	{:else}
		<div class="text" class:split-equally={split_equally}>
			{#if headline}
				<h3 class="headline">
					{headline}
				</h3>
			{/if}
			<div class="description" class:has-headline={headline}>
				{@html description}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.wrapper {
		margin-top: 3rem;

		@media (--tablet) {
			margin-top: 4rem;
		}

		@media (--desktop) {
			margin-top: 10rem;
		}

		@media (--large-desktop) {
			display: flex;
			align-items: center;
			gap: 4rem;
		}

		&.reverse {
			@media (--large-desktop) {
				flex-direction: row-reverse;
			}
		}
	}

	video,
	img {
		width: 100%;

		@media (--large-desktop) {
			width: 66.67%;

			&.split-equally {
				width: 50%;
			}
		}
	}

	.text {
		@media (--tablet) {
			width: 80%;
		}

		@media (--large-desktop) {
			width: 33.33%

      &.split-equally {
				width: 50%;
			}
		}
	}

	.headline {
		margin-top: 1rem;
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;

		@media (--tablet) {
			font-size: var(--2xl);
			color: var(--dark);
		}
	}

	.description {
		font-size: var(--base);
		line-height: 1.75rem;
		color: var(--dark);
		margin-top: 1rem;

		@media (--tablet) {
			margin-top: 1.5rem;
		}

		@media (--large-desktop) {
			margin: 0;
		}

		&.has-headline {
			margin-top: 2rem;
		}
	}
</style>
