<template>
  <h1>Test</h1>
</template>

<script>
import axios from 'axios';

export default {
  setup() {
    async function getCharacters() {
      const characters = await axios.get('https://rickandmortyapi.com/api/character');
      console.log(characters.data);
    }
    
    getCharacters();
  }
}

</script>