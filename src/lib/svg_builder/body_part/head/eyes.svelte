<script>
    let data = {
        right:{
            right_1: '<path d="m83.114 117.96c-2.922 1.3233-1.1612 5.3171 0.19627 5.8882" stroke-width="1.9" fill="none" stroke="#000" />'
        },
        middle:{
            middle_1: ''
        },
        left:{
            left_1: '<path d="m93.482 118.74c-3.4618-0.98291-1.8973 3.8942 0.19627 4.6124" stroke-width="1.9" fill="none" stroke="#000" />'
        }
    }

    export let right;
    export let middle;
    export let left;
</script>

<g class="eyes">
    {@html data.left[left]}
    {@html data.middle[middle]}
    {@html data.right[right]}
</g>