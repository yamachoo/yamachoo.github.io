import type { FC } from 'react'

type ExternalLinkProps = {
  href?: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-500 hover:text-indigo-300 dark:text-indigo-400 dark:hover:text-indigo-600"
    >
      {children}
    </a>
  )
}
