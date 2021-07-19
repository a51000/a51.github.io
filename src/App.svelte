<script lang="ts">
  export let name: string;
</script>

<main class="flex items-center justify-center h-screen">
  <div class="text-green-300 text-9xl max-w-md text-center">
    {name}
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    font-family: "advocate_c41_midbold";
  }
</style>
