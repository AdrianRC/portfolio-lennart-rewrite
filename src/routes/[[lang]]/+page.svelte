<script lang="ts">
	import List from '$lib/components/Project/List.svelte';
	import ActionCall from '$lib/components/Content/ActionCall.svelte';
	import { lang_store, new_link } from '$lib/translations/utils.svelte';
</script>

<div class="headline">
	{lang_store.translations.home.intro}
</div>
<!-- <List {projects} /> -->
<ActionCall
	heading={lang_store.translations.home.cta_title}
	link_text={lang_store.translations.home.cta_link_label}
	link={new_link('about/')}
/>
