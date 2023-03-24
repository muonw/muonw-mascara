<script lang="ts">
import AccordionItem from "$lib/components/AccordionItem.svelte";
import { onMount} from "svelte";
import "../styles/demo.scss";

let sizeClasses = ['default', 'lean', 'compact'];
let inputTypes = ['date','datetime-local','email','month','number','password','search','tel','text','time','url','week'];
let filledOut = true;

function switchColorScheme(scheme: 'light'|'dark') {
    let html = document.querySelector('html');
    html?.setAttribute('data-color-scheme', scheme);
}

onMount(() => {
    const colorSwitcher = (event: MediaQueryListEvent) => {
        switchColorScheme(event.matches ? 'dark' : 'light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', colorSwitcher);

    return () => {
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', colorSwitcher);
    }
});
</script>

<nav id="demo-page-top-bar">
    <a href="/mascara/">Home</a> | 
    <a href="https://github.com/muonw/muonw-mascara">GitHub</a> | 
    <span id='switch-to-light-mode' title="Light Mode" on:click={()=>switchColorScheme('light')} on:keypress={()=>switchColorScheme('light')}>☀️</span>
    <span id='switch-to-dark-mode' title="Dark Mode" on:click={()=>switchColorScheme('dark')} on:keypress={()=>switchColorScheme('dark')}>🌙</span>
</nav>

<div id="demo-page-main-content">

<h1>MuonW Mascara</h1>

<h2>Buttons</h2>

<h4>Class: "" | "native"</h4>
{#each sizeClasses as size}
    <button class={size}>{size}</button>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <button class={size} disabled>{size}</button>
    &nbsp;
{/each}

<h4>Class: "btn"</h4>
{#each sizeClasses as size}
    <button class="btn {size}">{size}</button>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <button class="btn {size}" disabled>{size}</button>
    &nbsp;
{/each}

<br>

<h4>Class: "a"</h4>
{#each sizeClasses as size}
    <button class="a {size}">{size}</button>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <button class="a {size}" disabled>{size}</button>
    &nbsp;
{/each}

<h2>Inputs</h2>

<h4>Type: checkbox</h4>

<label>
    <input type="checkbox" />
    <span>checkbox</span>
</label>

&nbsp;

<label>
    <input type="checkbox" checked />
    <span>checkbox</span>
</label>

<h4>Type: color</h4>

{#each sizeClasses as size}
    <input type="color" class={size}/>
    &nbsp;
{/each}

<h4>Type: file</h4>

<input type="file" />

<h4>Type: radio</h4>

<label>
    <input name="radio" type="radio" />
    <span>radio</span>
</label>

&nbsp;

<label>
    <input name="radio" type="radio" checked />
    <span>radio</span>
</label>

<h4>Type: range</h4>

<input type="range" />

<h4>Type: button</h4>

{#each sizeClasses as size}
    <input type="button" value={size} class={size} />
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <input type="button" value={size} class={size} disabled />
    &nbsp;
{/each}

<h4>Type: reset</h4>

{#each sizeClasses as size}
    <input type="reset" value={size} class={size} />
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <input type="reset" value={size} class={size} disabled />
    &nbsp;
{/each}

<h4>Type: submit</h4>

{#each sizeClasses as size}
    <input type="submit" value={size} class={size} />
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <input type="submit" value={size} class={size} disabled />
    &nbsp;
{/each}

<br>

{#each inputTypes as type}
    <h4>Type: {type}</h4>

    {#each sizeClasses as size}
        <label class="embedded ff_{size}">
            <span class="label-text"><span>{size}</span></span>
            <input type={type} placeholder=" " value="" class={size} />
        </label>
        &nbsp;
    {/each}

    <br>

    {#each sizeClasses as size}
        <label class="embedded ff_{size} ff_disabled">
            <span class="label-text"><span>{size}</span></span>
            <input type={type} placeholder=" " value="" class={size} disabled />
        </label>
        &nbsp;
    {/each}

    <br>

    {#each sizeClasses as size}
        <label class="embedded ff_{size}">
            <span class="label-text"><span>{size}</span></span>
            <input type={type} placeholder=" " value="" class={size} required />
        </label>
        &nbsp;
    {/each}

    <br>
{/each}

<br>


<h2>Select</h2>


{#each sizeClasses as size}
    <label class="embedded ff_{size}">
        <span class="label-text"><span>{size}</span></span>
        <select class="{size}">
            <option value=""></option>
            <option value="1">{size} 1</option>
            <option value="2">{size} 2</option>
            <option value="3">{size} 3</option>
        </select>
    </label>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <label class="embedded ff_{size} ff_disabled">
        <span class="label-text"><span>{size}</span></span>
        <select class="{size}" disabled>
            <option value=""></option>
            <option value="1">{size} 1</option>
            <option value="2">{size} 2</option>
            <option value="3">{size} 3</option>
        </select>
    </label>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <label class="embedded ff_{size}">
        <span class="label-text"><span>{size}</span></span>
        <select class="{size}" required>
            <option value=""></option>
            <option value="1">{size} 1</option>
            <option value="2">{size} 2</option>
            <option value="3">{size} 3</option>
        </select>
    </label>
    &nbsp;
{/each}

<br><br>

<h2>Textarea</h2>

{#each sizeClasses as size}
    <label class="embedded ff_{size}">
        <span class="label-text"><span>{size}</span></span>
        <textarea class={size}></textarea>
    </label>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <label class="embedded ff_{size} ff_disabled">
        <span class="label-text"><span>{size}</span></span>
        <textarea class={size} disabled></textarea>
    </label>
    &nbsp;
{/each}

<br>

{#each sizeClasses as size}
    <label class="embedded ff_{size}">
        <span class="label-text"><span>{size}</span></span>
        <textarea class={size} required></textarea>
    </label>
    &nbsp;
{/each}

<br><br>

<h2>Code</h2>

<code>code</code>

<br><br>

<h2>HR</h2>

<hr>

<br><br>

<h2>Svelte Components</h2>
<h3>Accordion Item</h3>

<div class="accordion">
    <AccordionItem header="Single Accordion Item" options={{open: false}}>
        <div>
            Content
        </div>
    </AccordionItem>
</div>

<br>

<div class="accordion">
    <AccordionItem header="Grouped Accordion Items - Item 1" options={{open: false}}>
        <div>
            Content
        </div>
    </AccordionItem>
    <AccordionItem header="Grouped Accordion Items - Item 2" options={{open: false}}>
        <div>
            Content
        </div>
    </AccordionItem>
    <AccordionItem header="Grouped Accordion Items - Item 3" options={{open: false}}>
        <div>
            Content
        </div>
    </AccordionItem>
</div>

</div>

