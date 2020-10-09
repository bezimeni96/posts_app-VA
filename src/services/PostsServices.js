import axios from "axios";

export default class PostsServices {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    getAll() {
        return axios.get('/posts');
    }

    get(id) {
        return axios.get(`/posts/${id}`);
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
}

export const postsServices = new PostsServices();