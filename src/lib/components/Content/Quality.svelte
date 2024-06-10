<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<div class="quality">
	<h3>
		{title}
	</h3>
	<div class="description">
		{@html description}
	</div>
</div>

<style lang="postcss">
	h3 {
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;
		color: var(--dark);

		@media (--tablet) {
			font-weight: 400;
			font-size: var(--2xl);
		}
	}

	.description {
		margin-top: 0.5rem;
		font-size: var(--base);
		line-height: 1.75rem;
		color: var(--dark);

		@media (--tablet) {
			width: 80%;
		}

		@media (--large) {
			width: 100%;
		}
	}
</style>
