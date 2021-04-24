import Head from 'next/head'
import {
  UserIcon,
  LightningBoltIcon,
  ShareIcon
} from '@heroicons/react/outline'

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

          <dl>
            <dt className="font-bold text-3xl mt-10 flex items-center">
              <UserIcon className="h-6 w-6 mr-1" />
              About me
            </dt>
            <div className="border-l-2 mt-4 px-4 py-2">
              <dd>yamachoo</dd>
              <dd className="mt-2">age 27</dd>
            </div>
          </dl>

          <dl>
            <dt className="font-bold text-3xl mt-10 flex items-center">
              <LightningBoltIcon className="h-6 w-6 mr-1" />
              Skill
            </dt>
            <div className="border-l-2 mt-4 px-4 py-2">
              <dd>Node.js / Express</dd>
              <dd className="mt-2">Vue, React</dd>
              <dd className="mt-2">Docker / Docker Compose</dd>
              <dd className="mt-2">
                AWS ( EC2 / RDS / S3 / Lambda / API Gateway )
              </dd>
              <dd className="mt-2">etc...</dd>
            </div>
          </dl>

          <div>
            <div className="font-bold text-3xl mt-10 flex items-center">
              <ShareIcon className="h-6 w-6 mr-1" />
              SNS
            </div>
            <div className="border-l-2 mt-4 px-4 py-2">
              <div>
                <a
                  href="https://twitter.com/yamachoo567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  Twitter
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="https://github.com/yamachoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-300"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="mt-5 p-5">
        <div className="text-center">© 2021 yamachoo</div>
      </footer>
    </div>
  )
}
