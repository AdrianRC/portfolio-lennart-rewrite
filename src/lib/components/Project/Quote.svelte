<script lang="ts">
	let { author, quote }: { author: string; quote: string } = $props();
</script>

<div class="wrapper">
	<div class="quote">
		{@html quote}
	</div>
	<p class="author">
		{author}
	</p>
</div>

<style lang="postcss">
	.wrapper {
		padding: 0 1rem;
		margin-top: 3rem;
		text-align: center;

		@media (--tablet) {
			margin-top: 4rem;
			padding: 0;
		}

		@media (--desktop) {
			margin-top: 10rem;
			width: 66.67%;
			margin: 0 auto;
		}
	}

	.quote {
		font-size: var(--lg);
		line-height: 1.5;
		color: var(--dark);
		font-family: var(--tenon);

		@media (--tablet) {
			font-size: var(--2xl);
		}

		@media (--desktop) {
			font-size: var(--3xl);
		}
	}

	.author {
		margin-top: 1rem;
		font-size: var(--base);
		line-height: 1.5;
		color: var(--mid);

		@media (--desktop) {
			margin-top: 1.5rem;
		}
	}
</style>
