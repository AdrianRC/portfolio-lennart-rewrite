<script lang="ts">
	let { image_src }: { image_src: string } = $props();
</script>

<img src={image_src} alt="Project screenshot" />

<style lang="postcss">
	img {
		width: 100%;
		margin-top: 3rem;

		@media (--tablet) {
			margin-top: 4rem;
		}

		@media (--desktop) {
			margin-top: 10rem;
		}
	}
</style>
