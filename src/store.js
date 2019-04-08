/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifResponse: [],
    searchedTerm: '',
    searching: false,
  },
  getters: {
    getGifResponse: state => state.gifResponse,
    getSearchedTerm: state => state.searchedTerm,
    getIfSearching: state => state.searching,
  },
  mutations: {
    setGifResponse(state, gifResponse) {
      state.gifResponse = gifResponse;
    },
    setSearchedTerm(state, searchedTerm) {
      state.searchedTerm = searchedTerm;
    },
    setIfSearching(state, searching) {
      state.searching = searching;
    },
  },
  actions: {
    setGifResponse(context, gifResponse) {
      context.commit('setGifResponse', gifResponse);
    },
    setSearchedTerm(context, searchedTerm) {
      context.commit('setSearchedTerm', searchedTerm);
    },
    setIfSearching(context, searching) {
      context.commit('setIfSearching', searching);
    },
  },
});
