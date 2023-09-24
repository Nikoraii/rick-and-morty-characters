<template>
  <div class="bg-slate-800 rounded-md text-slate-50 border border-gray-500">
    <img class="mx-auto w-full rounded-t-md" :src="character.image">
    <div id="info" class="p-2">
      <h2 class="text-3xl sm:text-2xl lg:text-2xl 2xl:text-3xl font-semibold">{{ character.name }}</h2>
      <p class="flex items-center capitalize font-semibold card-text">
        <span class="status-icon inline-block"
          :class="{
            'bg-red-800': character.status === 'Dead',
            'bg-green-600': character.status === 'Alive',
            'bg-gray-400': character.status === 'unknown'
          }">
          </span> {{ character.status }}</p>
          <span class="mt-2 card-text">
            {{ character.species }} <span v-if="character.type"> - {{ character.type }}</span>
          </span>
          <p class="mt-2 card-text capitalize">&#x1F4CD; {{ character.location.name }}</p>
          <p class=" text-slate-500 text-sm">Created at: {{ character.created }}</p>
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