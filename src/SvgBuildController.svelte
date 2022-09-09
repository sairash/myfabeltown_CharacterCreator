<script>
    import { swipe } from 'svelte-gestures';
    import Main from "./lib/svg_build_controller/main.svelte";
    import Pagination from "./lib/svg_build_controller/pagination.svelte";

    let pages = ['head accessories', 'eyes', 'mouth']

    let pages_number = pages.length

    let build_number = 1;

    let animation_direction = {x: 0, y : 0}

    function page_change(direction){
        if(direction == 'left'){
            if (build_number > 1){
                build_number -= 1;
                animation_direction.x = -20
            }
            
        }else if(direction == 'right'){
            if (build_number < pages_number) {
                build_number += 1
                animation_direction.x = 20;
            };
        }
    }

    function page_change_to_number(event){
        build_number = event.detail.page
    }

    function page_change_swipe(event){
        page_change(event.detail.direction)
    }

    
</script>

<div class="w-full flex-1 border-r-2 border-black flex flex-col select-none">
    <div class="w-full border-t-2 sm:border-t-0 border-b-2 border-black p-3 flex justify-between font-semibold" >
        <div class="px-2 cursor-pointer text-black hover:text-gray-500" class:blocked="{build_number == 1}" on:click={()=> {page_change('left')}}>
            <i class="bx bxs-left-arrow"></i>
        </div>
        <div class="flex-1 text-center bold_text capitalize">{pages[build_number - 1]}</div>
        <div class="px-2 cursor-pointer text-black hover:text-gray-500" class:blocked="{build_number >= pages_number}" on:click={()=> {page_change('right')}}>
            <i class="bx bxs-right-arrow"></i>
        </div>
    </div>
    <Pagination {pages} {build_number} on:page_change_to_number={page_change_to_number} />
    
    <Main {pages} {build_number} {animation_direction} on:page_change_swipe={page_change_swipe} />
    <div class="w-full h-10 border-black rounded-b-md border-t-2 flex justify-between bg-white">
        <div class="mx-2 text-md group cursor-pointer">
            <div class="bg-red-400 mt-1 group-hover:bg-red-500 border-black border-2 rounded-md">
                <i class="bx bx-left-arrow-alt p-1"></i>
            </div>
        </div>
        <div class="flex-1 bold_text text-center m-2">My Fable Town</div>
        <div class="mx-2 text-xs">
            <div class="p-1 mt-1.5 px-4 rounded-md bg-green-400 hover:bg-green-500 cursor-pointer border-2 border-black" >
                Done
            </div>
        </div>
    </div>
</div>

<style>
    .blocked{
        cursor: not-allowed;
        color: rgb(107, 114, 128);
    }
</style>