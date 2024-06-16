import buildUrl from './url-builder.js';
import config from './config';
import axios from 'axios';

class ApiClientV1 {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.apiVersion = 'v1';
        this.client = axios.create({
            baseURL: `${baseURL}/${this.apiVersion}`,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async request(endpoint, method = 'GET', data = null, accessToken = null) {
        const url = buildUrl(endpoint, {}, { endpoint: this.baseURL, apiVersion: this.apiVersion });
        const headers = {};
        if (accessToken) {
            headers.Authorization = `Bearer ${accessToken}`;
        }

        try {
            const response = await this.client.request({
                url,
                method,
                data,
                headers,
            });

            return response.data;
        } catch (error) {
            console.error('Failed to fetch:', error);
            throw error;
        }
    }

    getTasks(token) {
        return this.request('/tasks', 'GET', null, token);
    }

    getTaskById(id, token) {
        return this.request(`/tasks/${id}`, 'GET', null, token);
    }

    queryTasks(wiql, token) {
        return this.request('/tasks/query', 'POST', { wiql }, token);
    }
}

const v1 = new ApiClientV1(config.endpoint);
export { v1 }
