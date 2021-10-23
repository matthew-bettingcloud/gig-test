import axios from 'axios';

import Category from '../models/Category';

export default function getCategories(): Promise<Category[]> {
    return axios.get('/api/categories-list.json');
} 