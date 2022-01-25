import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Markdown from 'marked-react'

export default function Bio({ frontmatter: {title, cover_image}, content }) {
    return (
        <div className='container'>
            <>
                <Link href='/'>
                    <a className='btn btn-back'>Go Back</a>
                </Link>
                <div className='card card-page'>
                    <h1 className='post-title'>About me</h1>
                    <img src={cover_image} alt='cover-image' />
                    <div className='post-body'>
                        <Markdown>{content}</Markdown>
                    </div>
                </div>
            </>
        </div>
    )
}

export async function getStaticProps() {
    const mdWithMeta = fs.readFileSync(path.join('public/main_content', 'bio.md'), 'utf-8')
    const { data: frontmatter, content } = matter(mdWithMeta)

    return {
        props: { frontmatter, content }
    }    
}