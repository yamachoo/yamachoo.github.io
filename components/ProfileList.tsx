import { ProfileListProps } from '../next-env'

export function ProfileList(props: ProfileListProps) {
  return (
    <dl>
      <dt className="font-bold text-3xl mt-10 flex items-center">
        {props.icon}
        <div>{props.title}</div>
      </dt>
      <div className="border-l mt-4 ml-3 px-4 py-2">
        {props.descriptions.map((description, index) => {
          return (
            <dd
              key={index}
              className={description === props.descriptions[0] ? '' : 'mt-2'}
            >
              {description}
            </dd>
          )
        })}
      </div>
    </dl>
  )
}
