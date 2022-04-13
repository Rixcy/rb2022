import { ExternalLink } from './utils'
import * as s from './projects.css'

type Project = { href: string; name: string; description?: string }

const projects: Project[] = [
  {
    href: 'https://github.com/Rixcy/cv',
    name: 'CV',
    description:
      'Personal CV outlining work history and skills. Built with NextJS',
  },
  {
    href: 'https://github.com/Rixcy/nvim-lua',
    name: 'Neovim config',
    description:
      'Neovim configuration for a full fledged vim based development environment. Hand crafted over several months',
  },
  {
    href: 'https://github.com/Rixcy/airbnb-clone',
    name: 'Airbnb clone',
    description:
      'Quick and dirty Airbnb clone, just the front page for now, WIP',
  },
  {
    href: 'https://github.com/Rixcy/components',
    name: 'Components',
  },
  {
    href: 'https://github.com/Rixcy/community',
    name: 'Community',
  },
  {
    href: 'https://github.com/Rixcy/vite-react-starter',
    name: 'Vite React starter',
  },
  {
    href: 'https://github.com/Rixcy/react-component-library',
    name: 'React component library lemplate',
  },
  {
    href: 'https://github.com/Rixcy/blog-rails',
    name: 'Rails blog',
  },
  {
    href: 'https://github.com/Rixcy/nextjs-starter',
    name: 'NextJS starter',
  },
]

export const Projects = () => {
  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>Projects</h2>
      <div className={s.projects}>
        {projects.map((project, index) => (
          <article key={index}>
            <ExternalLink className={s.project} href={project.href}>
              {project.name}
            </ExternalLink>
            {project.description && (
              <p className={s.description}>{project.description}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
