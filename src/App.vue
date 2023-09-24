<template>
  <h1>Test</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" ref="scrollComponent">
    <div v-for="character in characters" :key="character.id" class="bg-slate-800 rounded-md text-slate-50 border border-gray-500">
      <img class="mx-auto w-full rounded-t-md" :src="character.image">
      <div id="info" class="p-2">
          <h2 class="text-3xl">{{ character.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import getCharacters from './api/getCharacters.js';

const characters = ref(null);

export default {
  setup() {
    const scrollComponent = ref(null);

    onMounted(async () => {
      try {
        characters.value = await getCharacters();
      } catch (error) {
        console.error(error);
      }
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const loadMore = async () => {
      try {
        let newChars = await getCharacters();
        characters.value.push(...newChars);
      } catch(error) {
        console.error('No more characters!');
      }
    }

    const handleScroll = () => {
      let element = scrollComponent.value;
      if (element.getBoundingClientRect().bottom <= window.innerHeight) {
        loadMore();
      }
    }

    return {
      characters,
      scrollComponent
    }
  }
};
</script>