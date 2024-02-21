import 'server-only'

const key = process.env.GHOST_CONTENT_API_KEY;
const api_url = process.env.GHOST_API_URL;
const site_tag = process.env.GHOST_SITE_TAG;

export async function getPosts() {
    const res = await fetch(
        `${api_url}/ghost/api/content/posts/?key=${key}&limit=all&filter=tag:${site_tag}`
    );

    const { posts } = await res.json();
    return posts;
}

export async function getSinglePost(slug: string) {
    const res = await fetch(
        `${api_url}/ghost/api/content/posts/slug/${slug}/?key=${key}`
    )

    const { posts } = await res.json()
    return posts[0]
}
