<div class="error-page">
	<div class="message">Whoops! Page not found.</div>
	<a href="/">
		<span>Homepage</span>
		<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z" />
		</svg>
	</a>
</div>

<style lang="postcss">
	.error-page {
		display: flex;
		justify-content: center;
		width: 100%;
		padding-top: 1rem;
		text-align: center;
		padding-bottom: 3rem;
		align-items: center;

		@media (--tablet) {
			padding-top: 10rem;
		}

		@media (--desktop) {
			padding-top: 4rem;
			padding-bottom: 10rem;
		}
	}

	.message {
		width: 100%;
		font-size: var(--2xl);
		line-height: 1.5;
		color: var(--dark);
		font-family: var(--tenon);

		@media (--tablet) {
			font-size: var(--3xl);
		}
	}

	a {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		margin: 2rem auto 0;
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;
		background-color: var(--white);
		border: 2px solid var(--dark);
		color: var(--dark);
		border-radius: 0.75rem;
		transition:
			color 150ms ease-in-out,
			background-color 150ms ease-in-out;

		&:hover {
			background-color: var(--black);
			color: var(--white);
		}
	}

	svg {
		display: inline;
		margin-left: 1.25rem;
		fill: currentColor;
	}
</style>
