<script lang="ts">
import { onMount, createEventDispatcher } from 'svelte';
import collapse from '$lib/scripts/collapse';

const dispatch = createEventDispatcher();

export let options: Record<string,any>;

let collapsibleEl: HTMLDivElement;

function toggle(e: Event) {
    dispatch('BeforeTransition', {event: e, data: !options.open});
    options.open = !options.open
}

onMount(() => {
    const mutationObserver = new MutationObserver(mutations => mutated(mutations));
    mutationObserver.observe(collapsibleEl, { attributes: true });
    
    function mutated(mutations: MutationRecord[]) {
        if (mutations.some(mutation => mutation.attributeName === "data-transition_end")) {
            let transitionStatus = collapsibleEl.getAttribute('data-transition_end');
            dispatch('AfterTransition', {data: transitionStatus});
        }
    }
});
</script>

<div class="item">
    <button class="native header" class:collapsed={!options.open} on:click={(e) => toggle(e)}>
        <slot name="header"></slot>
        <i class="icon dropdown mascon-chevron-down"></i>
    </button>

    <div use:collapse={{ open: options.open }} bind:this={collapsibleEl}>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</div>