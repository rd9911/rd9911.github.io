import Link from 'next/link'

export default function Post({post}) {
    return (
        <div className='card'>
            <img src={post.frontmatter.cover_image} alt='/' />
            <div className='publish-date'>Posted on {post.frontmatter.publishedDate}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.tldr}</p>
            <Link href={`/blog/${post.slug}`}><a className='btn'>Read More</a></Link>
        </div>
    )
}
