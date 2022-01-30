import sveltePreprocess, { sass } from "svelte-preprocess";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sass: {
      sync: true,
      implementation: sass,
    },
  }),
};
