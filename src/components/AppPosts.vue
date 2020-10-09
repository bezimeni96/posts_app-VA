<template>
    <div class="main">
        <div >
            <section v-for="post in postsList" :key="post.id"  class="card card-body">
                <h2 class="card-title"><router-link :to="{ name:'single-post', params: {id: post.id} }">{{ post.title }}</router-link></h2> <br>
                <p class="card-text">{{ post.text }}</p> <br>
                <div>
                    <router-link :to="{ name: 'edit-post', params: { id: post.id}}"><button class="btn btn-secondary">Edit</button></router-link>
                    <button type="button" class="btn btn-primary" @click="deletePost(post.id)">Delete</button>
                </div>
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

    methods: {
        deletePost(postId) {
            postsServices.delete(postId).then( () =>
                this.$router.go('/posts'));
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
    margin-right: 15px;
}
</style>