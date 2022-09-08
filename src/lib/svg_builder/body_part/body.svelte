<script>
    import Legs from "./body/legs.svelte";
    import Hands from "./body/hands.svelte";
    import Body from "./body/body.svelte";


    export let hands;
    export let legs;
    export let body_color;
</script>

<g transform="translate(-29 -92.266)" class="lower_body">

    <Hands {...hands}/>

    <Body {body_color} />

    <Legs {...legs} />

</g>