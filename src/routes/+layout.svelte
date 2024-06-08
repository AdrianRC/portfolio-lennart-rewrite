<script lang="ts">
	import type { LayoutData } from './$types';
	import '$lib/styles/app.pcss';

	export let data: LayoutData;
</script>

<div>
	<!-- <Header collections={data.collections} /> -->
	<h1>hellooo</h1>
	<main>
		<slot />
	</main>
	<!-- <Footer payment_methods={data.payment_methods} link_groups={data.footer_links} /> -->
</div>
