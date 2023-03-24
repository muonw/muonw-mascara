<script lang="ts">
import collapse from '$lib/scripts/collapse';

export let header: string;
export let options: Record<string,any>;
</script>

<div class="item">
    <button class="native header" class:collapsed={!options.open} on:click={() => options.open = !options.open}>
        {header}
        <i class="icon dropdown mascon-chevron-down"></i>
    </button>

    <div use:collapse={{ open: options.open }}>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>