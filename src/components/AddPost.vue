<template>
    <div class="main">
        <h2>Add new post</h2>
        <br>
        <form @submit.prevent="addPost" class="postForm form-group">
            <label for="postTitle">Title:</label>
            <input class="form-control" type="text" name="postTitle" id="postTitle" v-model="post.title" placeholder="Add post title.." required minlength="2"> <br>
            <label for="postText">Content:</label>
            <textarea class="form-control" name="postText" id="postText" cols="30" rows="10" v-model="post.text" placeholder="Add post content.." required maxlength="300"></textarea> <br>
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="button" class="btn btn-warning" @click="resetForm">Reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import { postsServices } from '../services/PostsServices';

export default {
    name: "AddPost",

    data() {
        return {
            post: {
                title: '',
                text: '',
            }
        }
    },

    methods: {
        addPost() {
            postsServices.add(this.post).then( () =>
                this.$router.push('/posts'))
        },

        resetForm() {
            this.post = {};
        }
    }
}
</script>

<style scoped>
.main {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.postForm {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    
}

.btn {
    width: 20%;
    margin-right: 15px;
}

</style>