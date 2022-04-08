import React from "react";
import Link from "next/link";

function Project({project}) {
  return (
    <div className='card'>
        <h3>{project.frontmatter.title}</h3>
        <p>{project.frontmatter.tldr}</p>
        <div className="buttons">
          {project.frontmatter.link ? 
              <div>
                <a className='btn' href={project.frontmatter.link_live} target='_blank' rel="noreferrer">Link</a>
              </div>
              : <div>
                  <a className='btn' href={project.frontmatter.link_live} target='_blank' rel="noreferrer">Live</a>
                  <a className='btn'  href={project.frontmatter.link_source} target='_blank' rel="noreferrer">Source Code</a>
                </div>}
        </div>
    </div>
  );
}

export default Project;
