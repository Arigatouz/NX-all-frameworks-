// @ts-ignore
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'svelte-project',
    title: {
      text: 'Welcome to Svelte',
      color: 'purple',
      backgroundColor: 'lightgray',
    }
  },
});

export default app;
