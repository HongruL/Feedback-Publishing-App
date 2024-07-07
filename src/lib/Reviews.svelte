<script>
    import { ratings } from '../stores';
    import Card from './Card.svelte';
  
    let reviews = [];
  
    ratings.subscribe(value => {
      reviews = value;
    });
  </script>
  
  <style>
    .reviews {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  </style>
  
  <div class="reviews">
    {#each reviews as review}
      <Card {review} />
    {/each}
  </div>
  