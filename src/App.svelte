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
        <div class="w-full flex-1 border-r-2 border-black flex flex-col">
          <div
            class="w-full border-t-2 sm:border-t-0 border-b-2 border-black p-3 flex justify-between font-semibold"
          >
            <div class="px-2 cursor-pointer text-black hover:text-gray-700">
              <i class="bx bxs-left-arrow"></i>
            </div>
            <div class="flex-1 text-center bold_text">Head</div>
            <div class="px-2 cursor-pointer text-black hover:text-gray-700">
              <i class="bx bxs-right-arrow"></i>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <div class="m-0.5 cursor-pointer">
              <i class="bx bx-square-rounded"></i>
            </div>
            <div class="m-0.5 cursor-pointer">
              <i class="bx bxs-square-rounded"></i>
            </div>
            <div class="m-0.5 cursor-pointer">
              <i class="bx bx-square-rounded"></i>
            </div>
            <div class="m-0.5 cursor-pointer">
              <i class="bx bx-square-rounded"></i>
            </div>
            <div class="m-0.5 cursor-pointer">
              <i class="bx bx-square-rounded"></i>
            </div>
          </div>
          <div
            class="w-full flex-1 flex flex-wrap p-2 justify-between overflow-auto -mt-1 changeable_item_container"
          >
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
            <div
              class="w-20 h-20 m-2 bg-blue-500 cursor-pointer border-2 border-black rounded-md"
            ></div>
          </div>
          <div
            class="w-full h-10 border-black rounded-b-md border-t-2 flex justify-between bg-white"
          >
            <div class="mx-2 text-md group cursor-pointer">
              <div
                class="bg-red-400 mt-1 group-hover:bg-red-500 border-black border-2 rounded-md"
              >
                <i class="bx bx-left-arrow-alt p-1"></i>
              </div>
            </div>
            <div class="flex-1 bold_text text-center m-2">My Fable Town</div>
            <div class="mx-2 text-xs">
              <!-- <i class="bx bxs-check-square"></i> -->
              <div
                class="p-1 mt-1.5 px-4 rounded-md bg-green-400 hover:bg-green-500 cursor-pointer border-2 border-black"
              >
                Done
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-full sm:max-w-sm pt-5 flex justify-center bg-green-500"
        >
        <SvgDisplay {...character}/>
        </div>
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
