import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import Book from '../components/Book';

export default function Bookshelf({ books }) {
  return (
    <div className='container'>
      <div className='bookshelf'>
          {books.map((book, index) => (
            <Book key={index} book={book} />
           ) )}
        </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('public/books'))
  const books = files.map(filename => {
    const slug = filename.replace('.md', '')
    const mdWithMeta = fs.readFileSync(path.join('public/books', filename), 'utf-8') // get frontmatter
    const { data: frontmatter } = matter(mdWithMeta)
    return { slug, frontmatter }
  })


  return {
    props: { books }
  }
}