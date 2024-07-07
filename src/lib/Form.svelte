<script>
  import { ratings } from "../stores";

  let username = "";
  let rating = "";
  let title = "";
  let report = "";
  let errorMessage = "";

  const validateInput = () => {
    const ratingValue = parseInt(rating, 10);

    if (!username || !title || !report || !rating) {
      errorMessage = "Alle Felder müssen ausgefüllt werden.";
      return false;
    }
    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      errorMessage = "Die Bewertung muss zwischen 1 und 5 Sternen liegen.";
      return false;
    }
    if (username.length > 30 || title.length > 30) {
      errorMessage =
        "Nutzername und Titel dürfen maximal 30 Zeichen lang sein.";
      return false;
    }
    if (report.length > 250) {
      errorMessage = "Der Bericht darf maximal 250 Zeichen lang sein.";
      return false;
    }
    errorMessage = "";
    return true;
  };

  const submitReport = () => {
    if (validateInput()) {
      const newRating = {
        username,
        rating: parseInt(rating, 10), // Ensure rating is stored as a number
        title,
        report,
      };
      ratings.update((r) => [...r, newRating]);
      username = "";
      rating = "";
      title = "";
      report = "";
    }
  };
</script>

<div class="form-container">
  <div class="left-column">
    <div class="row">
      <label for="username">Nutzername</label>
      <input
        id="username"
        type="text"
        class="form-control"
        bind:value={username}
        maxlength="30"
      />
    </div>
    <div class="row">
      <label for="rating">Rating</label>
      <input
        id="rating"
        type="number"
        class="form-control-rating"
        bind:value={rating}
        min="1"
        max="5"
      />
    </div>
    <div class="row">
      <label for="title">Titel</label>
      <input
        id="title"
        type="text"
        class="form-control"
        bind:value={title}
        maxlength="30"
      />
    </div>
  </div>
  <div class="middle-column">
    <label for="report">Deine Erfahrungen</label>
    <div class="form-group">
      <textarea
        id="report"
        class="form-control area"
        bind:value={report}
        maxlength="250"
      ></textarea>
    </div>
  </div>
  <div class="button-container">
    <button class="btn btn-primary" on:click={submitReport}
      >Bericht senden</button
    >
  </div>
</div>
{#if errorMessage}
  <p class="error-message">{errorMessage}</p>
{/if}

<style>
  .form-container {
    display: flex;
    align-items: flex-end;
  }
  .form-group {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  .form-control {
    width: 100%;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
  .form-control-rating {
    width: 50%;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .left-column {
    flex: 1;
    margin-right: 1rem;
  }
  .middle-column {
    flex: 1.5;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .row label {
    width: 120px;
    text-align: left;
  }
  .row .form-control,
  .row .form-control-rating {
    flex: 1;
    margin-left: 0.5rem;
  }
  .area {
    width: 75%;
    margin-left: 1rem;
  }
  .button-container {
    flex: 1.5;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100%;
  }
  textarea {
    width: 100%;
    height: 150px;
    border: 1px solid lightgray;
    margin-top: 0.5rem;
    border-radius: 0;
  }
  input {
    border: 1px solid black;
    border-radius: 0;
  }
  button {
    background-color: #00457d;
    color: white;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  #rating {
    margin-right: 25%;
  }
  .middle-column label {
    text-align: left;
    margin-left: 1rem;
  }
</style>
