<template>
  <h1>Test</h1>
    <li v-for="character in characters" :key="character.id">{{ character.name }}</li>
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
      console.log(characters);
    }
    
    getCharacters();

    return {
      characters
    }
  }

}

</script>