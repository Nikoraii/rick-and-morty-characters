<template>
  <h1>Test</h1>
  <ul ref="scrollComponent">
    <li v-for="character in characters" :key="character.id">
      <h1>{{ character.name }}</h1>
    </li>
  </ul>
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