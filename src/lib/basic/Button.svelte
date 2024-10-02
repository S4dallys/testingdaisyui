<!-- Button.svelte

This is a button component.
Style using classes found in https://daisyui.com/components/button/

Available props:
    - class [string]
    - disabled [bool]

To place icons within the button, import the icon and place anywhere 
within the button component as a named slot. 
You can use 'left-icon' or 'right-icon'

Ex. 
    <script>
        import TiInputChecked from 'svelte-icons/ti/TiInputChecked.svelte'
    </script>

    <Button><TiInputChecked slot="left-icon" /></Button>

-->

<script>
    export let disabled = false
    let className = 'btn-primary'
    export { className as class }
</script>

<button on:click class={'btn ' + className} {disabled}>
    {#if $$slots['left-icon']}<span class="h-1/2 ml-[-6px]"
            ><slot name="left-icon" /></span
        >{/if}
    <slot />
    {#if $$slots['right-icon']}<span class="h-1/2"
            ><slot name="right-icon" /></span
        >{/if}
</button>
