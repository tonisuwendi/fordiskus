import { getAccessToken, voteTypeURL } from '.';

const fetchApi = (() => {
    const BASE_URL = 'https://forum-api.dicoding.dev/v1';

    const _fetchWithAuth = async (url, options = {}) => (
        fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
    );

    const register = async ({ name, email, password }) => {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.user;
    };

    const login = async ({ email, password }) => {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.token;
    };

    const getAllUsers = async () => {
        const response = await fetch(`${BASE_URL}/users`);

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.users;
    };

    const getOwnProfile = async () => {
        const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.user;
    };

    const createThread = async ({ title, category, body }) => {
        const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                category,
                body,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.thread;
    };

    const getAllThreads = async () => {
        const response = await fetch(`${BASE_URL}/threads`);

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.threads;
    };

    const getDetailThread = async (id) => {
        const response = await fetch(`${BASE_URL}/threads/${id}`);

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.detailThread;
    };

    const createComment = async ({ threadId, content }) => {
        const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.comment;
    };

    const voteThread = async ({ threadId, type }) => {
        const pathURL = `/threads/${threadId}/${voteTypeURL(type)}`;
        const response = await _fetchWithAuth(`${BASE_URL}${pathURL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.vote;
    };

    const voteComment = async ({ threadId, commentId, type }) => {
        const pathURL = `/threads/${threadId}/comments/${commentId}/${voteTypeURL(type)}`;
        const response = await _fetchWithAuth(`${BASE_URL}${pathURL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.vote;
    };

    const seeLeaderboards = async () => {
        const response = await fetch(`${BASE_URL}/leaderboards`);

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') throw new Error(message);

        return responseJson.data.leaderboards;
    };

    return {
        register,
        login,
        getAllUsers,
        getOwnProfile,
        createThread,
        getAllThreads,
        getDetailThread,
        createComment,
        voteThread,
        voteComment,
        seeLeaderboards,
    };
})();

export default fetchApi;
