import { ExternalLink } from './utils'
import * as s from './projects.css'
import { Section } from './section'

type Project = { href: string; name: string; description?: string }

const projects: Project[] = [
  {
    href: 'https://github.com/Rixcy/cv',
    name: 'CV',
    description:
      'Personal CV outlining work history and skills. Built with NextJS. Styled using TailwindCSS',
  },
  {
    href: 'https://github.com/Rixcy/nvim-lua',
    name: 'Neovim config',
    description:
      'Neovim configuration for a full fledged vim based development environment. Hand crafted over several months',
  },
  {
    href: 'https://github.com/Rixcy/shouldibeoff',
    name: 'Should I be off?',
    description:
      "Simple site for checking if it's a bank holiday in the UK. Built with NextJS. Styled with Vanilla Extract. Using the Government API.",
  },
  {
    href: 'https://github.com/Rixcy/airbnb-clone',
    name: 'Airbnb clone',
  },
  {
    href: 'https://github.com/Rixcy/rb2022',
    name: 'RB2022 (This site)',
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
    href: 'https://github.com/Rixcy/blog-rails',
    name: 'Rails blog',
  },
]

export const Projects = () => {
  return (
    <Section.Root>
      <Section.Title>Projects</Section.Title>
      <div className={s.projects}>
        {projects.map((project, index) => (
          <article key={index}>
            <ExternalLink className={s.name} href={project.href}>
              {project.name}
            </ExternalLink>
            {project.description && (
              <p className={s.description}>{project.description}</p>
            )}
          </article>
        ))}
      </div>
    </Section.Root>
  )
}
