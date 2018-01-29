<template>
    <tr>
      <th scope="row">{{messageData.pk}}</th>
      <td>{{ formatDate }}</td>
      <td>{{ messageData.fields.body }}</td>
      <td><button type="button" class="btn btn-primary" @click="onStatusClicked()">Прочитано</button></td>
    </tr>
</template>

<script>
  import { store } from '@/store'
  export default {
    props: ['messageData'],
    methods: {
      onStatusClicked () {
        store.dispatch('setMessageStatus', this.messageData.pk)
      }
    },
    computed: {
      formatDate () {
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }
        var date = new Date(this.messageData.fields.date)
        return date.toLocaleString('ru', options)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
