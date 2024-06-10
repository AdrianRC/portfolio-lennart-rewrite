<script lang="ts">
	import Navbar from '$lib/components/Layout/Navbar.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import { page } from '$app/stores';
	import { lang_store } from '$lib/translations/utils.svelte';
	import type { LayoutData } from './$types';
	import '$lib/styles/app.pcss';

	let { data } = $props();

	$effect(() => {
		lang_store.set_lang(data.lang);
	});
</script>

<div class="layout">
	<header>
		<Navbar />
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<Footer lang_label="en" lang_link="en" language="en" />
	</footer>
</div>

<style lang="postcss">
	.layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100dvh;
		margin: 0 auto;
		font-family: var(--tenon);
	}

	header,
	footer {
		flex-grow: 0;
	}

	main {
		flex-grow: 0;
		width: 100%;
		padding: 2rem 1rem 0;
		max-width: 1560px;
		margin: 0 auto;

		@media (--tablet) {
			padding: 3rem 2rem 0;
		}

		@media (--desktop) {
			padding: 6rem 7.5rem 0;
		}
	}
</style>
