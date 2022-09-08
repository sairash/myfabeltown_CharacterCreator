<script>
    import Accessories from "./body/accessories.svelte";
    import Legs from "./body/legs.svelte";
    import Hands from "./body/hands.svelte";
    import Body from "./body/body.svelte";


    export let accessories;
    export let hands;
    export let legs;
    export let body_color;
</script>

<g transform="translate(-30.17 -65.855)" class="lower_body">

    <Hands {...hands}/>

    <Body {body_color} />


    <Legs {...legs} />

</g>

<Accessories {accessories} />
