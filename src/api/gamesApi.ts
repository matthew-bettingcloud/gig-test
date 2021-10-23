import axios from "axios";

export default function getGamesList() {
    return axios.get('/api/games-list.json');
}