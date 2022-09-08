<script>
    let data = {
        left:{
            left_1: '<path d="m105.67 154.15c8.0643-1.4667 14.057-0.26416 42.567-28.078" stroke="#000000" stroke-width="2.2" fill="none" stroke-linejoin="round" />'
        },
        right:{
            right_1: '<path d="m73.837 155.86c-8.0643-1.4667-14.057-0.26416-42.567-28.078" fill="none" stroke-linejoin="round" stroke="#000" stroke-width="2.2" />'
        }
    }

    export let left;
    export let right;
</script>


<g class="hands">
    <g class="left_hand">
        {@html data.left[left]}
    </g>
    <g class="right_hand">
        {@html data.right[right]}
    </g>
</g>