<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Home from './pages/index.svelte'
  import NotFound from './pages/not-found.svelte'
</script>

<Router>
  <main class="main">
    <Route path="/"><Home /></Route>
    <Route component={NotFound} />
  </main>
</Router>

<style lang="scss">
  @media (min-width: 640px) {
    .main {
      max-width: none;
    }
  }
</style>
