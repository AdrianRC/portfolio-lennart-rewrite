<script lang="ts">
	let { heading, link, link_text }: { heading: string; link: string; link_text: string } = $props();
</script>

<div class="wrapper">
	<!-- todo: check header -->
	<h2 class="slot-wrapper">
		{heading}
	</h2>
	<a href={link} class="link">
		<span>{link_text}</span>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8.90945 14.06L15.9563 7.0356L8.90945 0L7.22897 1.66927L11.419 5.85927H1V8.18953H11.419L7.22897 12.3795L8.90945 14.06Z"
			/>
		</svg>
	</a>
</div>

<style lang="postcss">
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 10rem 0;
		text-align: center;

		@media (--tablet) {
			padding: 12rem 0;
		}

		@media (--desktop) {
			padding: 16rem 0;
		}
	}

	.slot-wrapper {
		width: 100%;
		line-height: 1.5;
		color: var(--dark);
		font-size: var(--2xl);
		font-family: var(--tenon);

		@media (--tablet) {
			font-size: var(--3xl);
		}
	}

	a {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		margin: 0 auto;
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;
		color: var(--dark);
		border-radius: 0.75rem;
		background-color: var(--white);
		border: 2px solid var(--dark);
		transition:
			color 150ms ease-in-out,
			background-color 150ms ease-in-out;

		&:hover {
			color: var(--white);
			background-color: var(--black);
		}
	}

	svg {
		display: inline;
		margin-left: 0.5rem;
		fill: currentColor;
	}
</style>
