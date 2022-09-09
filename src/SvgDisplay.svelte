<script>
    import SvgBuilder from './lib/svg_builder/main.svelte';

    export let body_part;
    export let head_part;
</script>


<div class="w-full h-full sm:max-w-sm pt-5 flex justify-center bg-green-500">
    <SvgBuilder {body_part} {head_part} />
</div>