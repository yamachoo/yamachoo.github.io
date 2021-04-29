import type { VFC } from 'react'
import Link from 'next/link'

type HeaderProps = {
  home?: boolean
}

export const Header: VFC<HeaderProps> = ({ home }) => {
  return (
    <header className="p-5">
      {home ? (
        <h1 className="font-bold text-2xl text-center">yamachoo profile</h1>
      ) : (
        <div className="font-bold text-2xl text-center">
          <Link href="/">
            <a>yamachoo profile</a>
          </Link>
        </div>
      )}
    </header>
  )
}
