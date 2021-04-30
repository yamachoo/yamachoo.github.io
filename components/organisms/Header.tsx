import type { VFC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header: VFC = () => {
  const router = useRouter()

  return (
    <header className="p-5">
      {router.pathname === '/' ? (
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
