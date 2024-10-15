import { Section } from '../section'
import * as s from './work.css'

const jobs = [
  {
    title: 'Software Developer',
    company: 'Yearbook Machine',
    duration: '2024- ',
    href: 'https://yearbook.com'
  },
  {
    title: 'Technical Architect',
    company: 'Builder.ai',
    duration: '2024—24',
    href: 'https://builder.ai',
  },
  {
    title: 'Senior Frontend Developer',
    company: 'Progression',
    duration: '2021—23',
    href: 'https://progression.co',
  },
  {
    title: 'Tech Lead, Head of FE, Web Developer',
    company: '9xb',
    duration: '2019—21',
    href: 'https://9xb.com',
  },
  {
    title: 'Web Developer',
    company: 'Awaze',
    duration: '2019—19',
    href: 'https://awaze.com',
  },
  {
    title: 'Web Developer',
    company: 'Lead Tech',
    duration: '2018—19',
    href: 'https://www.lead-tech.co.uk',
  },
  {
    title: 'Software Developer',
    company: 'CPOMS',
    duration: '2016—18',
    href: 'https://www.cpoms.co.uk',
  },
  {
    title: 'IT Support',
    company: 'Meritec',
    duration: '2015-16',
    href: 'https://www.meritec.co.uk',
  },
  {
    title: 'Analytical Chemist',
    company: 'Keighley Laboratories',
    duration: '2012-15',
    href: 'https://www.keighleylabs.co.uk',
  },
]

export const Work = () => (
  <Section.Root>
    <Section.Title>Work</Section.Title>
    {jobs.map((job, index) => (
      <a
        key={index}
        className={s.item}
        href={job.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={s.company}>{job.company}</span>
        <span className={s.separator} />
        <span className={s.title}>{job.title}</span>
        <span className={s.duration}>{job.duration}</span>
      </a>
    ))}
  </Section.Root>
)
