<template>
    <nav>
        <ul>
            <li>
           <!-- <router-link to = "/">Home</router-link>  -->
                <router-link :to = "{name: 'home'}">Mi tienda</router-link>
            </li>
            
            <li>
                <router-link :to = "{name: 'products'}">Productos</router-link>
            </li>

            <li>
                <router-link :to = "{name: 'login'}">Iniciar Sesión</router-link>
            </li>
            
            <li>
                <router-link :to = "{name: 'detail', params: {id: '200', }}">Detail</router-link>
            </li>
            
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return{}
    },
})
</script>

<style scoped>
nav {
    min-height:  50px;
    background-color: rgb(232, 119, 119);
}

ul {
   display: flex;
   justify-content: center;
   list-style: none;
}

li {
    padding: 1rem;
    font-weight: bold;
}

a {
    color: white;
    text-decoration: none;
}

a:visited {
  color: white;
}

</style>