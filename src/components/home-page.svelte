<script lang="ts">
  import Form from '../components/form.svelte'
  import EmbedObject from '../components/embed-object.svelte'
  export let title: string

  let src: string =
    'https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik'

  function updateUrl(event) {
    src = event.detail.url
  }
</script>

<div>
  <div class="title-text">{title}</div>
  <EmbedObject {src} />
  <Form on:updateUrl={updateUrl} />
</div>

<style lang="scss">
  .title-text {
    width: 100%;
    color: #222222;
    font-size: 3em;
    font-family: 'ZenMaruGothic';
    margin: 0.5em 0;
  }
</style>
