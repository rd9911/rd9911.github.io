import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import Project from '../components/Project';

export default function Projects({ projects }) {
  return (
    <div className='container'>
        <div className='posts'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
           ) )}
        </div>
      </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('public/project_content'))
  const projects = files.map(filename => {
    const slug = filename.replace('.md', '')
    const mdWithMeta = fs.readFileSync(path.join('public/project_content', filename), 'utf-8') // get frontmatter
    const { data: frontmatter } = matter(mdWithMeta)
    return { slug, frontmatter }
  })


  return {
    props: {
      projects: projects
    }
  }
}