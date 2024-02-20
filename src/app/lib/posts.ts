import 'server-only'


export async function getPosts() {
    const key = process.env.GHOST_CONTENT_API_KEY;
    const api_url = process.env.GHOST_API_URL;
    const res = await fetch(
        `${api_url}/ghost/api/content/posts/?key=${key}&include=tags,authors`
    );

    const { posts } = await res.json();
    return posts;
}
