<script lang="ts">
  import { createForm } from 'felte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let error: string = ''
  let url: string = ''

  const { form } = createForm({
    onSubmit: (value) => {
      if (value.url === undefined || value.url === '') {
        return
      }
      url = value.url
      dispatch('updateUrl', { url: value.url })
    },
    validate: async (value) => {
      if (value.url === undefined || value.url === '') {
        error = ''
        return
      }

      const response = await urlCheck(value)

      if (!response) {
        error = 'URLの形式を確認してください'
        return
      }

      error = ''
    }
  })

  function urlCheck(value: { url: string }) {
    return /^(http|https):\/\/[^ "]+$/.test(value.url)
  }
</script>

<div class="form-wrapper">
  <form use:form>
    <fieldset>
      <legend> URL Input Form </legend>
      <input type="text" name="url" />
      <button type="submit">Check</button>
    </fieldset>
  </form>
  {#if error !== ''}
    <div class="error-text">{error}</div>
  {/if}
</div>

<style lang="scss">
  .form-wrapper {
    padding-top: 1.5em;
  }
  .error-text {
    color: #f44336;
    font-size: 1.5em;
    font-family: 'ZenMaruGothic';
    padding-top: 0.5em;
  }
  fieldset {
    font-family: 'ZenMaruGothic';
    border-color: rgb(255, 113, 51);
    display: block;
    font-size: 1.2em;
    background: var(--example-background);
    padding: 2rem;
    border-radius: 10px 30px;
  }
</style>
