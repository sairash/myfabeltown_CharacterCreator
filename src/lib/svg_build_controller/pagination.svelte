<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();


    function page_change_to_number(page) {
		dispatch('page_change_to_number', {
			page: page
		});
	}

    export let pages;
    export let build_number;
</script>


<div class="w-full flex justify-center">
    {#each pages as page, i}
      <div class="m-0.5 cursor-pointer hover:text-gray-500" on:click="{() => {page_change_to_number(i+1)}}">
          {#if i == build_number-1}
              <i class="bx bxs-square-rounded"></i>
          {:else}
              <i class="bx bx-square-rounded"></i>
          {/if}

      </div>
    {/each}
  </div>