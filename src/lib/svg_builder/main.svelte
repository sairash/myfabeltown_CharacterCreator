<script>
    import Head from './body_part/head.svelte';
    import Body from './body_part/body.svelte';

    export let body_part;
    export let head_part;
</script>



<svg stroke-linecap="round" stroke-linejoin="round" class="h-full" viewBox="0 0 119.16 167.17" version="1.1"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <Body {...body_part} />
    <Head {...head_part}/>
</svg>