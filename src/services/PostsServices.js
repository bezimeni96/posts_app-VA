import axios from "axios";

export default class PostsServices {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    getAll() {
        return axios.get('/posts?filter={"include":["comments"]}');
    }

    get(id) {
        return axios.get(`/posts/${id}?filter={"include":["comments"]}`);
    }

    add(post) {
        return axios.post('/posts', post);
    }

    edit(post) {
        return axios.put(`/posts/${post.id}`, post);
    }

    delete(id) {
        return axios.delete(`/posts/${id}`)
    }

    addComment(comment, postId) {
        return axios.post(`/posts/${postId}/comments`, { text: comment })
    }
}

export const postsServices = new PostsServices();