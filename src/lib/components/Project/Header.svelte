<script lang="ts">
	let {
		title,
		description,
		image_src,
		cropped
	}: { title: string; description: string; image_src: string; cropped: boolean } = $props();
</script>

<div>
	<div class="text">
		<h1>
			{title}
		</h1>
		<div class="description">{@html description}</div>
	</div>
	<img alt="{title} screenshot" src={image_src} class:cropped />
</div>

<style lang="postcss">
	.text {
		@media (--desktop) {
			display: flex;
			justify-content: space-between;
		}

		& h1 {
			font-size: var(--2xl);
			line-height: 1.5;
			color: var(--dark);
			font-family: var(--tenon);

			@media (--tablet) {
				font-size: var(--3xl);
			}

			@media (--desktop) {
				font-size: var(--4xl);
				line-height: 1.375;
			}
		}

		& .description {
			margin-top: 0.5rem;
			font-size: var(--base);
			line-height: 1.5;
			color: var(--dark);

			@media (--tablet) {
				font-size: var(--2xl);
				width: 80%;
			}

			@media (--desktop) {
				margin: 0;
				width: 50%;
				line-height: 2.25;
			}
		}
	}

	img {
		width: 100%;
		margin-top: 2rem;

		@media (--tablet) {
			margin-top: 3rem;
		}

		@media (--desktop) {
			margin-top: 4rem;
		}

		&.cropped {
			object-fit: cover;
			object-position: left top;
			height: 5rem;

			@media (--tablet) {
				height: 10rem;
			}
		}
	}
</style>
