import { getEntry } from 'astro:content';

// Throws rather than returning undefined, so a missing block fails the build.
export async function getBlock(slug: string) {
    const block = await getEntry('blocks', slug);
    if (!block) throw new Error(`src/content/blocks/${slug}/index.mdx is missing`);
    return block;
}

// For blocks shown as a card, whose heading comes from the frontmatter.
export async function getBlockTitle(slug: string): Promise<string> {
    const { data } = await getBlock(slug);
    if (!data.title) throw new Error(`src/content/blocks/${slug}/index.mdx needs a title in its frontmatter`);
    return data.title;
}
