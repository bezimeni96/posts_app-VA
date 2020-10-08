<template>
    <div class="main">
        <h1>{{ post.title }}</h1>
        <br>
        <br>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';


export default {
    name: "SinglePost",

    data() {
        return {
            post: {}
        }
    },


    async created() {
        const response = await postsServices.get(this.$route.params.id);
        this.post = response.data;
    }
    
}
</script>

<style scoped>
.main{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>