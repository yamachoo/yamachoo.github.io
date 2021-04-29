import type { VFC } from 'react'

export type ProfileListProps = {
  icon: JSX.Element
  title: string
  descriptions: string[]
}

export const ProfileList: VFC<ProfileListProps> = (props) => {
  return (
    <div>
      <div className="font-bold text-3xl mt-10 flex items-center">
        {props.icon}
        <h3>{props.title}</h3>
      </div>
      <div className="border-l mt-4 ml-3 px-4 py-2">
        {props.descriptions.map((description, index) => {
          return (
            <div
              key={index}
              className={description === props.descriptions[0] ? '' : 'mt-2'}
            >
              {description}
            </div>
          )
        })}
      </div>
    </div>
  )
}
