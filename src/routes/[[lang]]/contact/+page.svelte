<script lang="ts">
	let {
		title,
		address_headline,
		social_headline,
		description,
		fixed_image,
		disappearing_image
	}: {
		title: string;
		address_headline: string;
		social_headline: string;
		description: string;
		fixed_image: string;
		disappearing_image: string;
	} = $props();
</script>

<h1 class="headline">
	{title}
</h1>
<div class="page-description">{@html description}</div>
<div class="contact-wrapper">
	<div>
		<h2>
			{address_headline}
		</h2>
		<address>
			<div>
				<a href="mailto:hello@lennartbasler.com" class="hoverable"
					>hello@lennartbasler.com
					<svg
						width="11"
						height="10"
						viewBox="0 0 11 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
						/></svg
					></a
				><br />
				<a href="tel:+4904022821475" class="hoverable with-margin"
					>+49 (0) 40 228 214 75
					<svg
						width="11"
						height="10"
						viewBox="0 0 11 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
						/></svg
					></a
				><br />
			</div>
			<div class="address-lines">
				<p class="line-1">Lerchenstraße 28<br /></p>
				<p class="line-2">22767 Hamburg</p>
			</div>
		</address>
	</div>
	<div>
		<h2>
			{social_headline}
		</h2>
		<nav class="links">
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/lennartbasler/"
						target="_blank"
						rel="noopener"
						class="hoverable"
						>LinkedIn
						<svg
							width="11"
							height="10"
							viewBox="0 0 11 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
							/></svg
						></a
					>
				</li>
				<li>
					<a
						href="https://www.xing.com/profile/Lennart_Basler/"
						target="_blank"
						rel="noopener"
						class="hoverable with-margin"
						>Xing
						<svg
							width="11"
							height="10"
							viewBox="0 0 11 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
							/></svg
						></a
					>
				</li>
			</ul>
		</nav>
	</div>
</div>

<div class="images">
	<img src={fixed_image} alt="Setup" class="fixed" />
	<img src={disappearing_image} alt="Sketches" class="disappearing" />
</div>

<style lang="postcss">
	.contact-wrapper {
		@media (--tablet) {
			margin-top: 3rem;
			display: flex;

			& > * {
				flex: 1 1 0%;
			}
		}

		@media (--desktop) {
			margin-top: 4rem;
		}
	}

	h2 {
		margin-top: 2rem;
		font-size: var(--xl);
		font-weight: 500;
		line-height: 1.5;

		@media (--tablet) {
			font-weight: 400;
			font-size: var(--2xl);
		}
	}

	address {
		margin-top: 0.5rem;
		font-size: var(--base);
		font-style: normal;
		line-height: 1.375;
		color: var(--dark);

		@media (--desktop) {
			margin-top: 1rem;
		}

		@media (--large-desktop) {
			display: inline-flex;
		}
	}

	.hoverable {
		display: inline-flex;
		align-items: center;
		padding-bottom: 1px;
		border-bottom: 1px solid var(--white);
		transition: border-color 150ms ease-in-out;

		&:hover {
			border-color: var(--mid);
		}

		&.with-margin {
			margin-top: 0.5rem;
		}
	}

	svg {
		margin-left: 0.5rem;
		color: var(--mid);
		fill: currentColor;
	}

	.address-lines {
		@media (--large-desktop) {
			margin-left: 2rem;
		}

		& .line-1 {
			margin-top: 1rem;

			@media (--large-desktop) {
				margin: 0;
			}
		}

		& .line-2 {
			margin-top: 0.5rem;
		}
	}

	.links {
		margin-top: 0.5rem;
		font-size: var(--base);
		line-height: 1.375;
		color: var(--dark);

		@media (--large) {
			margin-top: 1rem;
		}
	}

	.images {
		display: flex;

		align-items: start;
		padding: 2rem 0;

		@media (--tablet) {
			padding: 4rem 0 6rem;
		}

		@media (--desktop) {
			padding: 5rem 0 8rem;
		}

		& .fixed {
			width: 100%;

			@media (--desktop) {
				margin-top: 5rem;
				padding-right: 2rem;
				width: 66.67%;
			}
		}

		& .disappearing {
			display: none;
			width: 100%;

			@media (--desktop) {
				padding-left: 2rem;
				width: 33.33%;
				display: block;
			}
		}
	}
</style>
