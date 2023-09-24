<template>
  <div class="bg-slate-800 rounded-md text-slate-50 border border-gray-500">
    <img class="mx-auto w-full rounded-t-md" :src="character.image">
    <div id="info" class="p-2">
      <h2 class="text-3xl">{{ character.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        character: Object
    }
}
</script>