<template>
  <div class="hello">
    <input type="text" v-model="title" name="" value=""> <br>
    <h1>{{ title }}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>
    <ul>
        <li v-for="item in items"> {{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greeting</button>
    <br>
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr>
    <label for="firstname">First Name:</label>
    <input type="text" v-model="user.firstName" name="firstname">
    <br>
    <label for="lastname">Last Name:</label>
    <input type="text" v-model="user.lastName" name="lastname">
    <h3>{{fullName}}</h3>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    msg: {
        type: String,
        default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'Hello World',
      user: {
          firstName: 'John',
          lastName: 'Doe'
      },
      showName: true,
      items: [
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'}
      ]
    }
  },
  methods: {
    greet: function(a) {
        alert(a);
    },
    pressKey: function(e){
        console.log(e.target.value);
    },
    enterHit: function() {
        console.log('You hit enter');
    }
  },
  computed:{
    fullName: function() {
        return this.user.firstName + ' ' + this.user.lastName;
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
