<script>
    import Accessories from "./head/accessories.svelte";
    import Eyes from "./head/eyes.svelte";
    import Mouth from "./head/mouth.svelte";
    import Face from "./head/face.svelte";
    import Head from "./head/head.svelte";


    export let eyes;
    export let mouth;
    export let face_color;
</script>

<g transform="translate(-29 -92.266)" class="upper_body">
    <g stroke-width="1.9" fill="none" stroke="#000"  class="head">

        <Face {face_color}/>

        <Eyes {...eyes} />

        <Mouth {mouth} />

        <Head />

    </g>
</g>