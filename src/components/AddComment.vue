<template>
    <div>
        <form class="commentForm form-group" @submit.prevent="addComment">
            <label for="commentText">Add Comment:</label>
            <textarea class="form-control" name="commentText" id="commentText" cols="30" rows="5" placeholder="Add comment.." v-model="comment"></textarea> <br>
            <button type="submit" class="btn btn-success">Add comment</button>
        </form>
    </div>
</template>

<script>

export default {
    name: "AddComent",
 
    data() {
        return {
            comment: ''
        }
    },

    methods: {
        addComment() {
            this.$emit('createdComment' ,this.comment);
            this.comment = '';
        }
    }
 
}
</script>

<style scoped>
.commentForm {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
}
.btn {
    width: 200px;
    margin-right: 15px;
}
</style>