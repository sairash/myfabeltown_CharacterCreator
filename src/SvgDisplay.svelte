<script>
    import SvgBuilder from './lib/svg_builder/main.svelte';

    export let body_part;
    export let head_part;
</script>

<div class="main_display w-screen h-96 bg-red-500 flex justify-center">
    <SvgBuilder {body_part} {head_part} />
</div>