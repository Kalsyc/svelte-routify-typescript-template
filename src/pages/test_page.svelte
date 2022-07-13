<script lang="ts">
  import { goto } from '@roxi/routify';
</script>

<main>
  <div>Hello</div>
  <button on:click={$goto('/')}>Go to root page</button>
</main>

<style>
  button {
    border-radius: 5px;
    border: black 2px solid;
  }
</style>
