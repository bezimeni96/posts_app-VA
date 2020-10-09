<template>
    <div class="main">
        <div >
            <section v-for="post in postsList" :key="post.id"  class="card card-body">
                <h2 class="card-title"><router-link :to="{ name:'single-post', params: {id: post.id} }">{{ post.title }}</router-link></h2> <br>
                <p class="card-text">{{ post.text }}</p> <br>
                <router-link :to="{ name: 'edit-post', params: { id: post.id}}"><button class="btn btn-secondary">Edit</button></router-link>
            </section>
        </div>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';

export default {
    name: "AppPosts",
    
    data() {
        return {
            postsList: [],
        }
    },

    async created() {
        const response = await postsServices.getAll();
        this.postsList = response.data;
    }
}
</script>

<style scoped>
.main {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.btn {
    width: 80px;
}
</style>