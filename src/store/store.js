import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import endpoints from '../assets/js/endpoints'
import Router from 'vue-router'
import router from '../router'
import TYPES from './types'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

function redirectToDetailView (characterId) {
  router.push({
    name: 'character-detail',
    params: {
      id: characterId
    }
  })
}

function remappedSelectedCharacter (selectedCharacter, characterEpisodes) {
  return Object.assign(selectedCharacter, { episode: remappedCharacterEpisodes(characterEpisodes) })
}

function remappedCharacterEpisodes (characterEpisodes) {
  return characterEpisodes.map(episode => {
    return episode.name
  })
}

export default new Vuex.Store({
  state: {
    charactersList: [],
    selectedCharacter: {}
  },
  getters: {

  },
  mutations: {
    setCharactersList (state, characters) {
      state.charactersList = [...characters]
    },
    setSelectedCharacter (state, {
      selectedCharacter,
      characterEpisodes
    }) {
      state.selectedCharacter = remappedSelectedCharacter(selectedCharacter, characterEpisodes)
    }
  },
  actions: {
    fetchCharacters: ({
      commit
    }) => {
      Vue.axios.get(endpoints.characters).then((response) => {
        const charactersFetchedData = response.data
        commit(TYPES.SET_CHARACTERS_LIST, charactersFetchedData.results)
        // use/access the results
      }).catch(errors => {
        console.log(errors)
      })
    },
    selectCharacter: ({
      commit
    }, selectedCharacter) => {
      const url = `${endpoints.episodes}/?id=${selectedCharacter.id}`
      Vue.axios.get(url)
        .then((response) => {
          commit(TYPES.SET_SELECTED_CHARACTER, {
            selectedCharacter,
            characterEpisodes: response.data.results
          })
        })
        .then(() => {
          redirectToDetailView(selectedCharacter.id)
        }).catch(errors => {
          console.log(errors)
        })
    }
  }
})
