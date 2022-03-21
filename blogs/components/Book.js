import React from 'react';
import Link from 'next/link';

function Book({book}) {
  return (
      <div className={book.frontmatter.tilted}>
        <div className={`book ${book.frontmatter.color}`}>
          <h2 style={book.frontmatter.title.length > 30 ? {fontSize: '0.6em'} : {fontSize: '1em'}}> {book.frontmatter.title} </h2>
          <h3> {book.frontmatter.author} </h3>
        </div>
      </div>
);
}

export default Book;