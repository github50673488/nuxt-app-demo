<template>
  <div>
    <!--  <h1>Hello world!</h1>-->
    <h1>{{ title }}</h1>
    <nuxt-link to="/about">About</nuxt-link>

    <br>
    <foo :posts="posts"/>
  </div>

</template>

<script>
import axios from 'axios'
// import Foo from '@/components/Foo'

export default {
  name: 'HomePage',
  layout: 'default',
  // components: {
  //   Foo
  // },
  async asyncData() {
    console.log('asyncData')
    console.log('this -->', this)
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/data.json'
    })
    return res.data
  },
  data() {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style scoped>

</style>
