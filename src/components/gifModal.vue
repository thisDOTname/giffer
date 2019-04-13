<script>
export default {
  name: 'gifModal',
  props: {
    selectedGif: Object,
    search: String,
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    closeModal() {
      const self = this;
      self.open = false;
      self.$emit('closeModal');
    },
  },
};
</script>

<style scoped lang="sass">
  .modal-overlay
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(255, 255, 255, 0.5)

  .modal
    position: fixed
    display: flex
    z-index: 1
    left: 0
    top: 0
    width: 100%
    height: 100%
    overflow: auto
    background-color: rgba(0,0,0,0.4)

  .modal-header
    position: relative
    background: #333
    padding: 1em
    color: #fff

  .header-text
    font-weight: 700
    padding-left: 1em
    font-style: italic

  .modal-content
    background-color: #fefefe
    margin: auto
    padding: 20px
    border: 1px solid #888
    width: 60%

  .close
    position: absolute
    right: 1em
    top: 1em

  .close:hover, .close:focus
    color: #ccc
    text-decoration: none
    cursor: pointer

  .share-body
    display: flex
    align-items: center

  .share-gif
    width: 100%
    background: #ccc
    margin: auto

  .preview-gif
    width: 100%
    height: 250px

</style>
