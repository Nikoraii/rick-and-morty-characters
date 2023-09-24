<template>
  <div id="main" class="py-3 px-2">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" ref="scrollComponent">
      <character-component
      v-for="character in characters"
      :character="character"
      :key="character.id"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import getCharacters from '../src/api/getCharacters.js';
import CharacterComponent from '@/components/CharacterComponent.vue';
const characters = ref(null);

export default {
  components: {
    CharacterComponent,
  },
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