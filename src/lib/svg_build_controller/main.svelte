<script>
    import { createEventDispatcher } from 'svelte';
    import { swipe } from 'svelte-gestures';
    import { fly } from 'svelte/transition';

    import Accessories from "./head/accessories.svelte";
    import Eye from "./head/eye.svelte";
    import Mouth from "./head/mouth.svelte";

    export let pages;
    export let build_number;
    export let animation_direction;

    $: page = pages[build_number - 1];


    const dispatch = createEventDispatcher();



    function handleSwipe(event){
        let direction = event.detail.direction
        if(direction == 'left'){
            direction = 'right'
        }else if(direction == 'right'){
            direction = 'left'
        }
        dispatch('page_change_swipe', {
			direction: direction
		});
    }
</script>

{#key page}
    <div class="w-full flex-1 flex flex-wrap p-2 justify-between overflow-auto -mt-1 changeable_item_container" in:fly={{x: animation_direction.x}} use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={handleSwipe}>
        {#if page == 'head accessories'}
            <Accessories  />
        {:else if page == 'eyes'}
            <Eye />
        {:else if page == 'mouth'}
            <Mouth />
        {/if}
    </div>
{/key}

