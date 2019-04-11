Vue.component('message', {
  template: `

  <article class="message" v-show="isVisible">
    <div class="message-header">
      {{ title }}
      <button type="button" @click="hideModal">x</button>
    </div>
    <div class="message-body">
      {{ body }}
    </div>
  </article>

  `,

  props: ['title', 'body'],

  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }

});

new Vue({
  el: '#root',
})
