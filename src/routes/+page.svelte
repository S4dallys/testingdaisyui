<script>
    import Button from '$lib/basic/Button.svelte'
    import TiInputChecked from 'svelte-icons/ti/TiInputChecked.svelte'
</script>

<article class="prose mt-14 px-8">
    <h1>Garlic bread with cheese: What the science tells us</h1>
    <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
    </p>
    <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
    </p>
    <div class="flex items-center flex-wrap gap-6 mt-10">
        <Button class="btn-primary btn-outline btn-wide"
            ><TiInputChecked slot="left-icon" />Eat one now!</Button
        >
        <Button class="btn-neutral" disabled>Disabled</Button>
    </div>
</article>

<style>
</style>
