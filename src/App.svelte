<script>
  import SvgDisplay from './SvgDisplay.svelte';
  import SvgBuildController from './SvgBuildController.svelte'

  let character = {
    head_part:{
      accessories: 'hair',
      eyes:{
        right: 'right_1',
        middle: null,
        left: 'left_1'
      },
      mouth: 'mouth_1',
    },
    body_part:{
      accessories:'tie',
      hands:{
        left: 'left_1',
        right: 'right_1' 
      },
      legs:{
        left: 'left_1',
        right: 'right_1'
      },
      body_color: '#ffea31',
    }
  }


</script>

<main>
  <div class="w-screen h-screen overflow-none bg-gray-100">
    <div class="w-full h-full sm:grid place-items-center">
      <div
        class="w-full cursor-default h-full sm:h-96 max-w-screen-lg bg-white border-2 border-black rounded-md flex flex-col-reverse sm:flex-row"
      >
        <SvgBuildController />
        <SvgDisplay {...character}/>
        
      </div>
    </div>
  </div>
  <!-- <div class="main">
    

    <input type="color" name="" bind:value={character.body_part.body_color} id="">
    <div class="">
      <h1 class="text-3xl font-bold mb-5">Accessories</h1>
      <span class="p-5 px-10 hover:bg-gray-400 cursor-pointer" on:click={() => character.head_part.accessories = "hair"}>Hair</span>
      <span class="p-5 px-10 hover:bg-gray-400 cursor-pointer" on:click={() => character.head_part.accessories = "crown"}>Crown</span>
    </div>
  </div> -->
</main>
