<template>
    <div>
        <h1>Posts:</h1>
        <br>
        <div class="posts-section">
            <section v-for="post in postsList" :key="post.id">
                <h2>{{ post.title }}</h2>
                <br>
                <p>{{ post.text }}</p>
                <hr>
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
.posts-section {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>