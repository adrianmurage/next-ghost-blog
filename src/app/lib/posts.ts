import 'server-only'


export async function getPosts() {
    const key = process.env.GHOST_CONTENT_API_KEY;
    const res = await fetch(
        `https://blog.47places.com/ghost/api/content/posts/?key=${key}&include=tags,authors`
    );

    const { posts } = await res.json();
    return posts;
}
