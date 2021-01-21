<script>
    import { onMount } from "svelte";
    import Recipe from "./components/Recipe.svelte";
    import Recipes from "./components/Recipes.svelte";
    let recipes;
    let recipe;
</script>
  
<h1>~ Vodka Brunch ~</h1>

<main>
    <Recipes {recipes} />
</main>