<template>
  <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Дата</th>
      <th scope="col">Сообщение</th>
      <th scope="col">Статус</th>
    </tr>
    </thead>
    <tbody>
      <message v-for="item in messages" :messageData="item" v-bind:key="item.date"></message>
    </tbody>
  </table>
</template>

<script>
  import { store } from '@/store'
  import Message from '@/components/Message.vue'
  export default {
    components: {
      Message
    },
    name: 'Messages',
    data () {
      return {
        timer: null
      }
    },
    methods: {
      getMessages () {
        store.dispatch('getMessages')
      }
    },
    created: function () {
      this.getMessages()
      this.timer = setInterval(this.getMessages, 10000)
    },
    computed: {
      messages () {
        return store.getters.messagesOutOfSpace
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
