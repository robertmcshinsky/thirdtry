<template>
<div class="home">
  <HelloWorld msg="" />
  <div class="frontPageSplit">
    <HelloWorld msg="" />


    <div class="split left">
      <div class="centered">
        <img src="http://placecorgi.com/260/180" class="dog-img show" alt="friendly and intimate - man's best friend" />
        <h2 class="leftSide">WALKieZ</h2>
        <p class="leftSide">Set up a profile for your best friend</p>
        <button type="button" name="button"><router-link to="/Profiles"><span style="color: black">Create Account</span></router-link></button>
        <button type="button" name="button"><router-link to="/Login"><span style="color: black">Login</span></router-link></button>
      </div>
    </div>

    <div class="split right">
      <div class="centered">
        <img src="https://images.freeimages.com/images/large-previews/923/our-friend-1239655.jpg">
        <h2>WALKerZ</h2>
        <p>Set up a profile to begin walking</p>
        <button type="button" name="button"><router-link to="/Profiles"><span style="color: black">Create Account</span></router-link></button>
        <button type="button" name="button"><router-link to="/Login"><span style="color: black">Login</span></router-link></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


<style>

</style>
