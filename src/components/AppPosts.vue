<template>
    <div class="main">
        <div >
            <section v-for="post in postsList" :key="post.id"  class="card card-body">
                <h2 class="card-title"><router-link :to="{ name:'single-post', params: {id: post.id} }">{{ post.title }}</router-link></h2>
                <span>{{ post.createdAt | diffForHumans}}</span> <br>
                <p class="card-text">{{ post.text }}</p> <br>
                <div>
                    <router-link :to="{ name: 'edit-post', params: { id: post.id}}"><button class="btn btn-secondary">Edit</button></router-link>
                    <button type="button" class="btn btn-primary" @click="deletePost(post.id)">Delete</button>
                    <span>Comments ( {{ post.comments.length }} )</span>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';
import { dateMixin } from '../mixins/mixins';

export default {
    name: "AppPosts",

    mixins: [dateMixin],
    
    data() {
        return {
            postsList: [],
        }
    },

    methods: {
        deletePost(postId) {
            postsServices.delete(postId).then( () =>
                this.createdPage());
        },

        async createdPage() {
            const response = await postsServices.getAll();
            this.postsList = response.data;
        }

        
    },

    created() {
        this.createdPage();
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