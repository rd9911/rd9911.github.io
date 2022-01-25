import React from "react";
import Link from "next/link";

function Project({project}) {
  console.log(project)
  return (
    <div className='card'>
        <img src={project.frontmatter.cover_image} alt='/' />
        <h3>{project.frontmatter.title}</h3>
        <p>{project.frontmatter.tldr}</p>
        <div className="buttons">
          <a className='btn' href={project.frontmatter.link_live} target='_blank' rel="noreferrer">Live</a>
          <a className='btn'  href={project.frontmatter.link_source} target='_blank' rel="noreferrer">Source Code</a>
        </div>
    </div>
  );
}

export default Project;
