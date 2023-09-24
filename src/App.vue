<template>
  <h1>Test</h1>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <h1>{{ character.name }}</h1>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

const characters = ref(null);

export default {
  setup() {
    async function getCharacters() {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      characters.value = response.data.results;
    }
    
    getCharacters();

    return {
      characters
    }
  }

}

</script>