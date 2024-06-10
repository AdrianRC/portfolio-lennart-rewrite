<script lang="ts">
	let { imprint }: { imprint: string } = $props();
</script>

<div class="imprint">{@html imprint}</div>

<style lang="postcss">
	.imprint {
		width: 100%;
		margin-bottom: 2rem;
		font-size: var(--base);
		line-height: 1.375;
		color: var(--dark);

		@media (--tablet) {
			margin-bottom: 3rem;
		}

		@media (--desktop) {
			margin-bottom: 6rem;
		}

		& h2:first-of-type {
			/* @apply text-2xl leading-normal text-dark font-tenon; */
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

		& a {
			border-bottom: 1px solid var(--black);
		}
	}
</style>
