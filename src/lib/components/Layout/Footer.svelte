<script lang="ts">
	import { lang_store } from '$lib/translations/utils.svelte';
	import { page } from '$app/stores';

	function toggle_lang_path(path: string): string {
		const de_prefix = /^\/de(\/|$)/;

		if (de_prefix.test(path)) {
			return path.replace(de_prefix, '/');
		} else {
			if (path === '' || path === '/') {
				return '/de/';
			} else {
				return path.replace(/^\/?/, '/de/');
			}
		}
	}

	let alternate_path = $derived(toggle_lang_path($page.url.pathname));
</script>

<footer>
	<div class="wrapper">
		<div class="about">
			<div class="address">
				<h2>
					{lang_store.lang === 'de' ? 'Adresse' : 'Address'}
				</h2>
				<address>
					<p>Lerchenstraße 28</p>
					<p>22767 Hamburg</p>
				</address>
			</div>
			<div class="links-wrapper">
				<h2>
					{lang_store.lang === 'de' ? 'Netzwerke' : 'Connect'}
				</h2>
				<nav>
					<ul>
						<li>
							<a href="https://www.linkedin.com/in/lennartbasler/" target="_blank" rel="noopener"
								>LinkedIn</a
							>
						</li>
						<li>
							<a href="https://www.xing.com/profile/Lennart_Basler/" target="_blank" rel="noopener"
								>Xing</a
							>
						</li>
					</ul>
				</nav>
			</div>
			<div class="contact">
				<h2>
					{lang_store.lang === 'de' ? 'Kontakt' : 'Contact'}
				</h2>
				<address>
					<p>Lennart Basler</p>
					<a href="mailto:hello@lennartbasler.com" class="email">hello@lennartbasler.com</a><br />
					<a href="tel:+4904022821475" class="phone">+49 (0) 40 228 214 75</a>
				</address>
			</div>
		</div>
		<nav class="lang-switcher">
			<!-- to the same route but in the opposite language -->
			<!-- text of the opposite language -->
			<a href={alternate_path} class="lang-link border-transition"
				><svg class="mr-2" width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.333 10a8.333 8.333 0 10-16.667 0 8.333 8.333 0 0016.667 0zm-1.725-.833h-2.442a10.757 10.757 0 00-1.942-5.45 6.667 6.667 0 014.384 5.45zm-9.042 1.666h4.933a9.532 9.532 0 01-2.5 5.509 9.166 9.166 0 01-2.433-5.509zm0-1.666a9.5 9.5 0 012.433-5.5 9.325 9.325 0 012.5 5.5H7.566zm.3-5.475a10.983 10.983 0 00-1.975 5.475h-2.5a6.667 6.667 0 014.475-5.475zm-4.475 7.141h2.5c.137 1.968.815 3.86 1.958 5.467a6.667 6.667 0 01-4.458-5.467zm8.792 5.459a10.95 10.95 0 001.983-5.459h2.458a6.667 6.667 0 01-4.441 5.459z"
						fill="#86868B"
					/></svg
				>{lang_store.lang === 'de' ? 'English' : 'Deutsch'}</a
			>
			<a href="/imprint" class="imprint border-transition"
				>{lang_store.lang === 'de' ? 'Impressum' : 'Imprint'}</a
			>
		</nav>
	</div>
</footer>

<style lang="postcss">
	footer {
		width: 100%;
		background-color: var(--black);
	}

	.wrapper {
		padding: 1.5rem 1rem 2rem;
		margin: 0 auto;
		max-width: var(--max-width, 1560px);

		@media (--tablet) {
			padding: 2rem;
		}

		@media (--desktop) {
			padding: 3rem 7.5rem;
		}
	}

	.about {
		@media (--tablet) {
			display: flex;
		}
	}

	h2 {
		font-size: var(--2xl);
		line-height: 1.5;
		color: var(--white);
		font-family: var(--tenon);
	}

	address {
		margin-top: 0.5rem;
		font-size: var(--base);
		font-style: normal;
		line-height: 2;
		color: var(--light);

		@media (--tablet) {
			margin-top: 1rem;
		}
	}

	.address {
		@media (--tablet) {
			width: 14rem;
		}

		@media (--desktop) {
			flex-grow: 1;
		}
	}

	.links-wrapper {
		margin-top: 2rem;

		@media (--tablet) {
			margin-top: 0;
			margin-left: 3rem;
			flex-grow: 1;
		}

		@media (--desktop) {
			width: 16rem;
		}

		& nav {
			margin-top: 0.5rem;
			font-size: var(--base);
			line-height: 2;
			color: var(--light);

			@media (--tablet) {
				margin-top: 1rem;
			}
		}
	}

	.contact {
		margin-top: 2rem;

		@media (--tablet) {
			margin-top: 0;
			width: 14rem;
		}

		@media (--large) {
			flex-grow: 1;
		}
	}

	a {
		padding-bottom: 1px;
		border-bottom: 1px solid var(--black);
		transition: border-color 150ms ease-in-out;

		&:hover {
			border-color: var(--white);
		}
	}

	.email {
		margin-top: 0.5rem;
	}

	.phone {
		margin-top: 0.25rem;
	}

	li + li {
		margin-top: 0.5rem;
	}

	.lang-switcher {
		display: inline-flex;
		margin-top: 2rem;
		font-size: var(--base);
		color: var(--mid);
		line-height: 1.5;

		@media (--tablet) {
			margin-top: 3rem;
		}

		@media (--desktop) {
			margin-top: 4rem;
		}

		& .lang-link {
			display: inline-flex;
			align-items: center;
		}

		& .imprint {
			margin-left: 2rem;
		}

		.border-transition {
			padding-bottom: 1px;
			border-bottom: 1px solid var(--black);
			transition: border-color 150ms ease-in-out;

			&:hover {
				border-color: var(--mid);
			}
		}
	}
</style>
