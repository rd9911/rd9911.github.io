import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Post from '../components/Post'
import matter from 'gray-matter'


export default function Home({ posts }) {
  return (
    <div className='container'>
      <Head>
        <title>rd9911</title>
      </Head>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
         ) )}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8') // get frontmatter
    const { data: frontmatter } = matter(mdWithMeta)
    return { slug, frontmatter }
  })
  console.log(posts)


  return {
    props: {
      posts
    }
  }
}