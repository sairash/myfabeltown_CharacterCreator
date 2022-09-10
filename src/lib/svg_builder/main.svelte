<script>

    import { character } from '../../store';
    import Head from './body_part/head.svelte';
    import Body from './body_part/body.svelte';
</script>



<svg stroke-linecap="round" stroke-linejoin="round" class="w-full sm:h-full sm:w-auto max-w-xs" style="max-width: 200px" viewBox="0 0 119.16 167.17" version="1.1"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
    <Body {...$character.body_part} />
    <Head {...$character.head_part}/>
</svg>