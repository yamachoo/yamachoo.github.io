import type { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header: VFC = () => {
  const pathname = useRouter().pathname
  const title = 'yamachoo profile'
  const className =
    'font-bold text-2xl inline-block w-typing overflow-hidden whitespace-nowrap border-r-12 border-transparent animate-typing'

  return (
    <header className="p-5 flex justify-center font-mono">
      {pathname === '/' ? (
        <h1 className={className}>{title}</h1>
      ) : (
        <div className={className}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </div>
      )}
    </header>
  )
}
