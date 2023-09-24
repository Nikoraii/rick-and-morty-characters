import axios from 'axios';

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

export default getCharacters;
