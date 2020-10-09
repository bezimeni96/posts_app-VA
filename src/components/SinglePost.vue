<template>
    <div class="main">
        <h1>{{ post.title }}</h1>
        <br> <br>
        <p>{{ post.text }}</p>
        <hr>
        <add-comment @createdComment="addComment">
        </add-comment>
        <div>
            <div class="list-group" v-for="comment in post.comments" :key="comment.id">
                <p class="mb-1">{{ comment.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';
import AddComment from './AddComment.vue';

export default {
    name: "SinglePost",

    components: { AddComment },

    data() {
        return {
            post: {},
        }
    },

    methods: {
        addComment(comment) {
            postsServices.addComment(comment, this.post.id).then( () =>
                this.createPage());
            
        },
        async createPage() {
            const response = await postsServices.get(this.$route.params.id);
            this.post = response.data;

        }
    },


    created() {
        this.createPage();
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