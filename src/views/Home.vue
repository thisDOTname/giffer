<template>
  <div class="home">
    <div class="searched-for" v-if="gifResponse.length">
      Showing results for <em>{{searchedTerm}}</em>
    </div>
    <div class="gif-results" v-if="gifResponse.length">
      <template v-for="(gif, index) in gifResponse">
        <div :key="`preview-${index}`">
            <img class="preview-gif" :src="gif.preview" alt="preview">
            <div class="gif-actions">
              <button @click="viewGif(gif)">View</button>
              <button @click="shareGif(gif)">Share</button>
            </div>
        </div>
      </template>
    </div>
    <div class="text-body" v-else>
      <div v-if="searching">
        Searching gifs for "{{searchedTerm}}"
      </div>
      <div v-else>
        Search & find the perfect gif
      </div>
    </div>

    <gif-modal
      :selectedGif="selectedGif"
      :search="searchedTerm"
      inline-template
      v-if="viewModal"
      @closeModal="viewModal = false"
    >
      <div>
        <div class="modal-overlay"></div>
        <div class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" @click="closeModal">[ close ]</span>
              <span class="header-text">{{search}} gif</span>
            </div>
            <img :src="selectedGif.share" alt="share" style="width: 100%; height: 50vh;" />
          </div>
        </div>
      </div>
    </gif-modal>

    <gif-modal
      :selectedGif="selectedGif"
      :search="searchedTerm"
      inline-template
      v-if="shareModal"
      @closeModal="shareModal = false"
    >
      <div>
        <div class="modal-overlay"></div>
        <div class="modal">
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" @click="closeModal">[ close ]</span>
              <span class="header-text">{{search}} gif</span>
            </div>
            <div class="share-body">
              <img class="preview-gif" :src="selectedGif.preview" alt="preview">
              <textarea readonly class="share-gif" v-model="selectedGif.url"></textarea>
            </div>
          </div>
        </div>
      </div>
    </gif-modal>
  </div>
</template>

<script>
import gifModal from '@/components/gifModal.vue';
import store from '@/store';

export default {
  name: 'home',
  components: {
    gifModal,
  },
  data() {
    return {
      viewModal: false,
      shareModal: false,
      selectedGif: {},
    };
  },
  computed: {
    gifResponse() {
      return store.getters.getGifResponse;
    },
    searchedTerm() {
      return store.getters.getSearchedTerm;
    },
    searching() {
      return store.getters.getIfSearching;
    },
  },
  mounted() {
    const self = this;
    const viewModalElm = document.getElementById('viewModal');
    const shareModalElm = document.getElementById('shareModal');
    window.onclick = (event) => {
      if (event.target === viewModalElm || event.target === shareModalElm) {
        self.viewModal = false;
        self.shareModal = false;
      }
    };
  },
  methods: {
    viewGif(gif) {
      const self = this;
      self.selectedGif = gif;
      self.viewModal = true;
    },
    shareGif(gif) {
      const self = this;
      self.selectedGif = gif;
      self.shareModal = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
    .searched-for
      background-color: #333
      color: #fff
      padding: 0.5em
      margin: 1em 0

    .gif-results
      height: 60vh
      overflow: auto
      display: grid
      grid-template-columns: repeat(4, 1fr)
      grid-auto-rows: minmax(250px, auto)
      grid-gap: 50px
      text-align: center
      padding: 0 5%

    .gif-actions
      display: flex
      background: #B2DFDB

    .gif-actions button
        width: 50%
        background: #333
        color: #fff
        font-weight: bold
        padding: 0.5em 0
        cursor: pointer

    .text-body
      background-color: #333
      height: 70vh
      color: #fff
      display: flex
      align-items: center
      font-size: 2em
      font-style: italic

    .text-body div
        margin: auto;

    .preview-gif
      width: 100%
      height: 250px

</style>
