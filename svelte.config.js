const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: {},
      postcss: false
    })
  ]
}
