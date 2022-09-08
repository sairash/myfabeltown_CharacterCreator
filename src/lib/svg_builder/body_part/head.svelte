<script>
    import Accessories from "./head/accessories.svelte";
    import Eyes from "./head/eyes.svelte";
    import Mouth from "./head/mouth.svelte";
    import Face from "./head/face.svelte";
    import Head from "./head/head.svelte";


    export let accessories;
    export let eyes;
    export let mouth;
    export let face_color;
</script>

<g transform="translate(-30.17 -65.855)" class="upper_body">
    <g class="head">

        <Face {face_color}/>

        <Eyes {...eyes} />

        <Mouth {mouth} />

        <Head />

    </g>
</g>

<Accessories {accessories}/>