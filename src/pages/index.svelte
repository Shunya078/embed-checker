<script lang="ts">
  import HomePage from '../components/home-page.svelte'
  const title: string = 'Embed Checker'
</script>

<main>
  <div class="home-wrapper">
    <HomePage {title} />
  </div>
</main>

<style lang="scss">
  .home-wrapper {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
  }
</style>