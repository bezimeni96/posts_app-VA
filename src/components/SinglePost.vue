<template>
    <div class="main">
        <h1>{{ post.title }}</h1>
        <small>Created: {{ post.createdAt | formatDate('DD.MM.YYYY.') }}</small>
        <br> <br>
        <p>{{ post.text }}</p>
        <hr>
        <add-comment @createdComment="addComment">
        </add-comment>
        <div class="list-group">
            <div  class="d-flex w-100 justify-content-between" v-for="comment in post.comments" :key="comment.id">
                <p class="mb-1">{{ comment.text }}</p>
                <small class="createdAt">Commented {{ comment.createdAt | diffForHumans }} </small>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';
import AddComment from './AddComment.vue';
import { dateMixin } from '../mixins/mixins'

export default {
    name: "SinglePost",

    components: { AddComment },
    mixins: [dateMixin],

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

.createdAt {
    margin-left: 20px;
}
</style>