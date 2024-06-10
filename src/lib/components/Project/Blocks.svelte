<script lang="ts">
	import { onMount } from 'svelte';
	import type { SvelteComponent } from 'svelte';

	type BlockType = 'Header' | 'Image' | 'List' | 'Preview' | 'Quote';

	interface Block {
		id: string;
		type: BlockType;
		data?: any;
	}

	let { blocks }: { blocks: Block[] } = $props();

	let components: Partial<Record<BlockType, SvelteComponent>> = {};

	// Load all the components that are in use
	onMount(async () => {
		await Promise.all(
			blocks.map(async (block) => {
				if (!components[block.type]) {
					components[block.type] = await load_component(block.type);
				}
			})
		);
	});

	// Load a specific component
	async function load_component(type: BlockType): Promise<SvelteComponent> {
		switch (type) {
			case 'Header':
				return (await import('$lib/components/Header/Header.svelte'))
					.default as unknown as SvelteComponent;
			case 'Image':
				return (await import('$lib/components/Blocks/Image/Image.svelte'))
					.default as unknown as SvelteComponent;
			case 'List':
				return (await import('$lib/components/Blocks/List/List.svelte'))
					.default as unknown as SvelteComponent;
			case 'Preview':
				return (await import('$lib/components/Blocks/Preview/Preview.svelte'))
					.default as unknown as SvelteComponent;
			case 'Quote':
				return (await import('$lib/components/Blocks/Quote/Quote.svelte'))
					.default as unknown as SvelteComponent;
		}
	}
</script>

<div>
	{#each blocks as { id, type, data } (id)}
		<svelte:component this={components[type]} {...data} />
	{/each}
</div>
