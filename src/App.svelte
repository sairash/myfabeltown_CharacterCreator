<script>
  import SvgDisplay from './SvgDisplay.svelte';


  let character = {
    head_part:{
      accessories: 'hair',
      eyes:{
        right: 'right_1',
        middle: null,
        left: 'left_1'
      },
      mouth: 'mouth_1',
      face_color: '#ffffff',
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
  <div class="main">
    <SvgDisplay {...character}/>

    <input type="color" name="" bind:value={character.body_part.body_color} id="">
    <input type="color" name="" bind:value={character.head_part.face_color} id="">
    <div class="">
      <h1 class="text-3xl font-bold mb-5">Accessories</h1>
      <span class="p-5 px-10 hover:bg-gray-400 cursor-pointer" on:click={() => character.head_part.accessories = "hair"}>Hair</span>
      <span class="p-5 px-10 hover:bg-gray-400 cursor-pointer" on:click={() => character.head_part.accessories = "crown"}>Crown</span>
    </div>
  </div>
</main>
