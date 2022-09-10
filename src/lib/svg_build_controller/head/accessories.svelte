<script>
    import {character_set, character} from '../../../store'

    let data = $character_set.head_part.accessories;


    function change_value(value) {
        let changing_value = $character.head_part
        changing_value.accessories = value
		character.update(m => Object.assign({}, m, {head_part: changing_value}));
	}
</script>

{#each data as part, i}

    <div class="w-20 h-20 m-2  cursor-pointer border-2 border-black rounded-md text-center" class:bg-red-500="{part.command == $character.head_part.accessories}" on:click="{()=> change_value(part.command)}">
        <div class="w-full flex justify-center">
            <img src="/src/assets/character_png/{part.command}.png" class="object-contain w-14 h-14" alt="">
        </div>
        {part.name}
    </div>

{/each}
