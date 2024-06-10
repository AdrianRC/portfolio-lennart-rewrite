<script lang="ts">
	import { fade } from 'svelte/transition';

	const {
		image_1,
		image_2,
		description_1,
		description_2
	}: { image_1: string; image_2: string; description_1: string; description_2: string } = $props();
</script>

<div class="wrapper" transition:fade>
	<div class="first">
		<img src={image_1} alt="Project screenshot" />
		<div class="description">
			{@html description_1}
		</div>
	</div>
	<div class="second">
		<img src={image_2} alt="Project screenshot" />
		<div class="description">
			{@html description_2}
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		margin-top: 3rem;

		@media (--tablet) {
			margin-top: 4rem;
		}

		@media (--desktop) {
			display: flex;
			margin-top: 10rem;
			gap: 4rem;
		}
	}

	.first {
		@media (--desktop) {
			width: 50%;
		}
	}

	.second {
		margin-top: 3rem;

		@media (--tablet) {
			margin-top: 4rem;
		}

		@media (--desktop) {
			margin-top: 0;
			width: 50%;
		}
	}

	img {
		width: 100%;
	}

	.description {
		margin-top: 1rem;
		font-size: var(--base);
		line-height: 1.75rem;
		color: var(--dark);

		@media (--tablet) {
			margin-top: 1.5rem;
			width: 80%;
		}

		@media (--desktop) {
			width: 100%;
		}
	}
</style>
