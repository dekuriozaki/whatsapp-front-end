import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9000'
    // baseURL:'https://dekuriozaki-miniature-goggles-5jwjgw747p43v4v5-9000.preview.app.github.dev'
});

export default instance;