export type Post = {
    title: string;
    date: string;
    image: string;
    excerpt: string;
    isFeatured?: boolean,
    slug:string;
}
export type Posts = Post[]

