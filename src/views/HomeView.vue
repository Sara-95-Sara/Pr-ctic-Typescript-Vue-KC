<template>
  <div class="home">
    <HelloWorld msg="Para poder ver los productos hay que  Iniciar Sesión"/> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
<style>

</style>

