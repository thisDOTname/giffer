<template>
  <div id="app">
    <div class="header">
      <img class="giffer-logo" src="./assets/giffer.png" />
      <div>Giffer</div>
      <div class="header-links">
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-link :to="{ name: 'examples'}">Examples</router-link>
      </div>
    </div>

    <div class="gif-input-div">
      <input
        type="text"
        v-model="search"
        autofocus
        placeholder="Search for gifs"
        @keyup.enter="giffer"
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import store from './store';

export default {
  name: 'App',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    giffer() {
      const self = this;
      const url = 'https://api.tenor.com/v1/anonid?key=LIVDSRZULELA';
      const apikey = 'LIVDSRZULELA';
      const lmt = 20;

      store.dispatch('setSearchedTerm', self.search);
      store.dispatch('setGifResponse', []);
      store.dispatch('setIfSearching', true);

      self.$http.get(url)
        .then((result) => {
          if (result.status === 200) {
            const searchUrl = `https://api.tenor.com/v1/search?tag=${self.search}&key=${apikey}&limit=${lmt}&anonId=${result.data.anon_id}`;
            self.$http.get(searchUrl)
              .then((searchResult) => {
                if (searchResult.status === 200) {
                  const gifResponse = searchResult.data.results.map((obj) => {
                    const rObj = {};
                    rObj.preview = obj.media[0].nanogif.url;
                    rObj.share = obj.media[0].tinygif.url;
                    rObj.url = obj.url;
                    return rObj;
                  });
                  store.dispatch('setGifResponse', gifResponse);
                  store.dispatch('setIfSearching', false);
                } else {
                  store.dispatch('setGifResponse', []);
                  store.dispatch('setIfSearching', false);
                }
              })
              .catch(() => {
                store.dispatch('setGifResponse', []);
                store.dispatch('setIfSearching', false);
              });
          } else {
            store.dispatch('setGifResponse', []);
            store.dispatch('setIfSearching', false);
          }
        })
        .catch(() => {
          store.dispatch('setGifResponse', []);
          store.dispatch('setIfSearching', false);
        });
    },
  },
};
</script>
<style lang="stylus">
  body
    background-color: #121212

  #app
    margin: 1em

  .header
    color: #fff
    display: flex;
    align-items: center;

  .header div
    font-size: 2em
    font-weight: 700
    font-style: italic

  .giffer-logo
    width: 80px
    height: 80px

  .header-links
    position: absolute
    right: 0

  .header-links a
    font-size: 0.75em
    text-decoration: none
    padding: 0 1em
    color: #fff
    font-weight: 100

  .gif-input-div
    background-color: #333
    padding: 1em
    margin: 1em 0

  .gif-input-div input
      width: 100%
      padding: 0.5em 0
      font-size: 1.25em
</style>
