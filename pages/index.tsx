import Head from 'next/head'
import { ProfileList } from '../components/ProfileList'
import { SnsList } from '../components/SnsList'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>yamachoo profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-5">
        <h1 className="font-bold text-2xl text-center">yamachoo profile</h1>
      </header>

      <main className="mb-auto md:mx-auto md:w-10/12 lg:w-8/12 p-5">
        <article className="w-full">
          <h2 className="font-bold text-5xl">What I Do</h2>
          <p className="mt-5">
            BackendメインのJavaScript推しエンジニア
            <br />
            最近は知見を広げるためにプライベートでReact / Next /
            GatsbyやTypeScriptを触ってます👀
          </p>

          <ProfileList />

          <SnsList />
        </article>
      </main>

      <footer className="mt-5 p-5">
        <div className="text-center">© 2021 yamachoo</div>
      </footer>
    </div>
  )
}
