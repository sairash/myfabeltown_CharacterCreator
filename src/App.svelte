<script>
  import SvgDisplay from './SvgDisplay.svelte';

  let face_color = '#ffffff';
  let body_color = '#ffea31'

  let character = {
    head_part:{
      eyes:{
        right: 'right_1',
        middle: null,
        left: 'left_1'
      },
      mouth: 'mouth_1',
      face_color: '#ffffff'
    },
    body_part:{
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

  console.log(character)
</script>

<main>
  <div class="main">
    <SvgDisplay {...character} {face_color} {body_color}/>

    <input type="color" name="" bind:value={character.body_part.body_color} id="">
    <input type="color" name="" bind:value={character.head_part.face_color} id="">
  </div>
</main>
