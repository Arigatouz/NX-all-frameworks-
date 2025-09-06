<script lang="ts">
  export let name: string;
  export let title: {
    text: string;
    color: string;
    backgroundColor?: string;
  }
</script>

<main>
  <h1>Welcome {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <h2 style="color: {title.color}; background-color: {title.backgroundColor ?? 'transparent'}">{title.text}</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
