<script>
    import { onMount } from "svelte";
    import Recipe from "./Recipe.svelte";
    let recipes;
  
    onMount(async () => {
        await fetch(`./api/recipes`)
            .then(r => r.json())
            .then(data => {
                recipes = data;
            })
            .catch(e => r.json(e));
    })
  
</script>

{#if recipes}
    <ul>
    {#each recipes as recipe }
      <li>    
        <Recipe {recipe} />
      </li>
    {/each}
    </ul>
{:else}
  <div class="loading">Loading...</div>
{/if}