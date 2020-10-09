<template>
    <div class="main">
        <h2>{{ (post.id ? "Edit post" : "Add new post")}}</h2>
        <br>
        <form @submit.prevent="submitForm" class="postForm form-group">
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
                this.redirectTo('/posts'))
        },

        resetForm() {
            this.post = {};
        },

        submitForm() {
            if (this.post.id) {
                this.editPost();
            } else {
                this.addPost();
            }
        },

        editPost() {
            postsServices.edit(this.post).then( () =>
                this.redirectTo('/posts'))
        },

        redirectTo(address) {
            return this.$router.push(address)
        }
    },

    async created() {
        if (this.$route.params.id) {
            const response = await postsServices.get(this.$route.params.id);
            this.post = response.data;
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
    width: 120px;
    margin-right: 15px;
}

</style>