<script lang="ts">
import { onMount, createEventDispatcher } from 'svelte';
import collapse from '$lib/scripts/collapse';

const dispatch = createEventDispatcher();

type AccordionOptionsType = {
    open?: boolean,
    headerTag?: 'button'|'a', // Header tag type
    headerUrl?: string, // Is header tag is <a>, this will be the href
    customToggleFunction?: Function, // If set, replaces the default toggle function
}

export let options: AccordionOptionsType;

let headerEl: HTMLElement;
let collapsibleEl: HTMLDivElement;

function toggle(e: Event) {
    const KeyboardEvent: KeyboardEvent = e as KeyboardEvent;
    const targetEl = e.target as HTMLElement;
    let allowDefaultEvent = false; // If false, will run preventDefault and stopPropagation
    let cancelToggling = false;
    let isHeaderClicked = false;
    let isChildLinkClicked = false;
    let isChildButtonClicked = false;
    let isInertChildClicked = false;

    if (targetEl === headerEl) {
        isHeaderClicked = true;
    } else if (targetEl.tagName === 'A') {
        isChildLinkClicked = true;
    } else if (targetEl.tagName === 'BUTTON') {
        isChildButtonClicked = true;
    } else {
        isInertChildClicked = true;
    }

    // If ctrl/shift is down in a link click, allow the default behavior
    // (e.g. opening the href in a new tab) and avoid toggling while the link is being opened
    if (KeyboardEvent?.ctrlKey || KeyboardEvent?.shiftKey) {
        if (isChildLinkClicked ||
            (options?.headerTag === 'a' && (isHeaderClicked || isInertChildClicked))
        ) {
            allowDefaultEvent = true;
            cancelToggling = true;
        }
    }

    // If this is a spacebar keyup allow the default behavior (e.g. triggering <button> clicks)
    if (e.type === 'keyup' && KeyboardEvent?.key === ' ') {
        allowDefaultEvent = true;
    }
    
    // Cancel toggling if the clicked item is an interactive child (e.g. link, button)
    if (!isHeaderClicked && !isInertChildClicked) {
        cancelToggling = true;
    }

    if (allowDefaultEvent === false) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Toggle if the header or a non-interactive child is clicked
    if (cancelToggling === false) {
        dispatch('BeforeTransition', {event: e, data: !options.open});
        options.open = !options.open
    }
}

function handleClick(e: Event) {
    options?.customToggleFunction ? options.customToggleFunction(e) : toggle(e);
}

function handleKeyDown(e: KeyboardEvent) {
    // Prevent scroll on spacebar keydown on header
    if (e.key === ' ' && e.target as HTMLElement === headerEl) {     
        e.preventDefault();
    }
}

function handleKeyUp(e: KeyboardEvent) {
    // Mimic click on spacebar keyup
    if (e.key === ' ') {
        handleClick(e);
    }
}

onMount(() => {
    const mutationObserver = new MutationObserver(mutations => mutated(mutations));
    mutationObserver.observe(collapsibleEl, { attributes: true });
    
    function mutated(mutations: MutationRecord[]) {
        if (mutations.some(mutation => mutation.attributeName === "data-transition_end")) {
            let transitionStatus = collapsibleEl.getAttribute('data-transition_end');
            dispatch('AfterTransition', {data: transitionStatus === 'open'});
        }
    }
});
</script>

<div class="item">
    {#if options?.headerTag === 'a'}
        <a
            class="native header"
            class:collapsed={!options.open}
            bind:this={headerEl}
            on:click={handleClick}
            on:keydown={handleKeyDown}
            on:keyup={handleKeyUp}
            href={options?.headerUrl ?? ''}
        >
            <slot name="header"></slot>
            <i class="icon dropdown mascon-chevron-down"></i>
        </a>
    {:else}
        <button
            class="native header"
            class:collapsed={!options.open}
            bind:this={headerEl}
            on:click={handleClick}
        >
            <slot name="header"></slot>
            <i class="icon dropdown mascon-chevron-down"></i>
        </button>
    {/if}

    <div
        class="content"
        use:collapse={{ open: options.open }}
        bind:this={collapsibleEl}
    >
        <slot name="content"></slot>
    </div>
</div>