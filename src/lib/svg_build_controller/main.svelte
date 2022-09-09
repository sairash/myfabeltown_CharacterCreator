<script>
    import { fly } from 'svelte/transition';

    import Accessories from "./head/accessories.svelte";
    import Eye from "./head/eye.svelte";
    import Mouth from "./head/mouth.svelte";

    export let pages;
    export let build_number;
    export let animation_direction;

    $: page = pages[build_number - 1]
</script>

{#key page}
    <div class="w-full flex-1 flex flex-wrap p-2 justify-between overflow-auto -mt-1 changeable_item_container" in:fly={{x: animation_direction.x}}>
        {#if page == 'head accessories'}
            <Accessories  />
        {:else if page == 'eyes'}
            <Eye />
        {:else if page == 'mouth'}
            <Mouth />
        {/if}
    </div>
{/key}
