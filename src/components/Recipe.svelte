<script>
    export let recipe;
</script>

<article id={recipe.id}>
    <h2>{recipe.title}</h2>
    <div>
      <small>Type</small>
      <p>{recipe.type}</p>
    </div>
    <div>
      <small>Difficulty</small>
      <p>{recipe.difficulty}</p>
    </div>
    <div>
      <small>Prep time</small>
      <p>{recipe.preptime}</p>
    </div>
    <div>
      <small>Suggested by</small>
      <p>{recipe.contributor}</p>
    </div>
    <div>
      <small>Prepared by</small>
      <p>{recipe.made_by}</p>
    </div>
    <div class="full">
      <small>Ingredients</small>
      <p>{recipe.ingredients}</p>
    </div>
    <div class="full">
      <small>Instructions</small>
      <p>{recipe.text}</p>
    </div>
    <div class="half">
      <small>Notes</small>
      <p>{recipe.notes}</p>
    </div>
    <div class="half">
      <small>Goes well with</small>
      <p>{recipe.goes_well_with}</p>
    </div>
    <!-- title: entry.gsx$title.$t,
            type: entry.gsx$type.$t,
            ingredients: entry.gsx$ingredients.$t,
            difficulty: entry.gsx$difficulty.$t,
            preptime: entry.gsx$preptime.$t,
            contributor: entry.gsx$contributedby.$t,
            text: entry.gsx$text.$t,
            made_by: entry.gsx$madeby.$t,
            goes_well_with: entry.gsx$goeswellwith.$t,
            id: entry.id.$t.split('/').pop(), -->
</article>