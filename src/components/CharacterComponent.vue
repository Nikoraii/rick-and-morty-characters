<template>
  <div class="bg-slate-800 rounded-md text-slate-50 border border-gray-500">
    <img class="mx-auto w-full rounded-t-md" :src="character.image">
    <div id="info" class="p-2">
      <h2 class="text-3xl sm:text-2xl lg:text-2xl 2xl:text-3xl font-semibold">{{ character.name }}</h2>
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