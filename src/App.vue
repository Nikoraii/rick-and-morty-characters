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
import axios from 'axios';

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

    let api = 'https://rickandmortyapi.com/api/character';

    const getCharacters = async () => {
        const characters = await axios.get(api);
        try {
            api = characters.data.info.next;
            return characters.data.results;
        } catch(error) {
            console.error(error);
        }
    }

    return {
      characters,
      scrollComponent
    }
  }
};
</script>