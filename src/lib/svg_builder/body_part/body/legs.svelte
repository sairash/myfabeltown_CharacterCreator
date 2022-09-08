<script>
    let data = {
        right:{
            right_1: '<path d="m108.26 209.58v22.343" fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="2.2" />'
        },
        left:{
            left_1: '<path d="m75.148 209.29v22.343" fill="none" stroke="#000000" stroke-linejoin="round" stroke-width="2.2" />'
        }
    }

    export let right;
    export let left;
</script>

<g fill="none" stroke="#000" stroke-width="2.2" class="legs">
    <g class="right_leg">
        {@html data.right[right]}
    </g>
    <g class="left_leg">
        {@html data.left[left]}
    </g>
</g>