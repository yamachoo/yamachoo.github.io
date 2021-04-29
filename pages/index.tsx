import { UserIcon, LightningBoltIcon } from '@heroicons/react/outline'
import { ProfileList } from '../components/ProfileList'
import type { ProfileListProps } from '../components/ProfileList'
import { SnsList } from '../components/SnsList'

export default function Home() {
  const about: ProfileListProps = {
    icon: <UserIcon className="h-6 w-6 mr-1" />,
    title: 'About me',
    descriptions: ['yamachoo', 'age 27']
  }
  const skill: ProfileListProps = {
    icon: <LightningBoltIcon className="h-6 w-6 mr-1" />,
    title: 'Skill',
    descriptions: [
      'Node.js / Express',
      'Vue, React',
      'Docker / Docker Compose',
      'AWS ( EC2 / RDS / S3 / Lambda / API Gateway )',
      'etc...'
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
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

          <ProfileList
            icon={about.icon}
            title={about.title}
            descriptions={about.descriptions}
          />

          <ProfileList
            icon={skill.icon}
            title={skill.title}
            descriptions={skill.descriptions}
          />

          <SnsList />
        </article>
      </main>

      <footer className="mt-5 p-5">
        <div className="text-center">© 2021 yamachoo</div>
      </footer>
    </div>
  )
}
