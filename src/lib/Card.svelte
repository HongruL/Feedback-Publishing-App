<script>
    export let review;
  
    const getStarClass = (index) => {
      return index < review.rating ? 'fa-solid fa-star' : 'fa-regular fa-star';
    };
  </script>
  
  <style>
    .card {
      border: 1px solid black;
      border-radius: 0.5rem;
      padding: 1rem;
      margin: 0.5rem;
      width: 100%;
      max-width: 300px;
    }
    .stars {
      color: gold;
    }
    .stars.gray {
      color: gray;
    }
  </style>
  
  <div class="card">
    <div class="card-header">
      <span>{review.username}</span>
      <span class="stars {review.rating < 5 ? 'gray' : ''}">
        {#each Array(5) as _, i}
          <i class={getStarClass(i)}></i>
        {/each}
      </span>
    </div>
    <div class="card-body">
      <h5>{review.title}</h5>
      <p>{review.report}</p>
    </div>
  </div>
  