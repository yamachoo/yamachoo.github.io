import { UserIcon, LightningBoltIcon } from '@heroicons/react/outline'

export function ProfileList() {
  const about = {
    title: 'About me',
    descriptions: ['yamachoo', 'age 27']
  }
  const skill = {
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
    <>
      <dl>
        <dt className="font-bold text-3xl mt-10 flex items-center">
          <UserIcon className="h-6 w-6 mr-1" />
          <div>{about.title}</div>
        </dt>
        <div className="border-l mt-4 ml-3 px-4 py-2">
          {about.descriptions.map((description, index) => {
            return (
              <dd
                key={index}
                className={description === about.descriptions[0] ? '' : 'mt-2'}
              >
                {description}
              </dd>
            )
          })}
        </div>
      </dl>

      <dl>
        <dt className="font-bold text-3xl mt-10 flex items-center">
          <LightningBoltIcon className="h-6 w-6 mr-1" />
          <div>{skill.title}</div>
        </dt>
        <div className="border-l mt-4 ml-3 px-4 py-2">
          {skill.descriptions.map((description, index) => {
            return (
              <dd
                key={index}
                className={description === skill.descriptions[0] ? '' : 'mt-2'}
              >
                {description}
              </dd>
            )
          })}
        </div>
      </dl>
    </>
  )
}
