import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Markdown from 'marked-react'
import Link from 'next/link'

export default function BookPage(
    { frontmatter: {title, publishedDate, cover_image}, content }) {
    return (
        <div className='container'>
            <>
                <Link href='/bookshelf'>
                    <a className='btn btn-back'>Go Back</a>
                </Link>
                <div className='card card-page'>
                    <h1 className='post-title'>{title}</h1>
                    <div className='post-date'>{publishedDate}</div>
                    <img src={cover_image} alt='cover-image' />
                    <div className='post-body'>
                        <Markdown>{content}</Markdown>
                    </div>
                </div>
            </>
        </div>
    )
}


export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('public/books'))
    const paths = files.map(filename => ({
        params: { slug: filename.replace('.md', '') }
    }))

    return { 
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {slug} }) {
    const mdWithMeta = fs.readFileSync(path.join('public/books', slug + '.md'), 'utf-8')
    const { data: frontmatter, content } = matter(mdWithMeta)

    return {
        props: { frontmatter, content, slug}
    }    
}