import axios from "axios";

export default class PostsServices {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }

    getAll() {
        return axios.get('/posts')
    }

    get(id) {
        return axios.get(`/posts/${id}`)
    }
}

export const postsServices = new PostsServices();