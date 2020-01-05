<template>
  <div class="hello">
    <p class="hi">hello world</p>
    <h1>{{ msg }}</h1>
    <Router-link to="/blogs" >博客</Router-link>
    <Router-link to="/blogs" >专栏</Router-link>
    <Router-link to="/blogs" >简历</Router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: "Welcome to killerlei's home"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  font-size: 26px;
}
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
