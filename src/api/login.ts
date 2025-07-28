const API_URL = 'https://reqres.in/api/login';

export async function login(username: string, password: string) {
    try {
        const res = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1',
            },
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error);
        }

        return data;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}
