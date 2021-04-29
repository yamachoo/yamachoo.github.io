import { ShareIcon } from '@heroicons/react/outline'
import type { VFC } from 'react'
import { ExternalLink } from './ExternalLink'

export const SnsList: VFC = () => {
  return (
    <div>
      <div className="font-bold text-3xl mt-10 flex items-center">
        <ShareIcon className="h-6 w-6 mr-1" />
        <h3>SNS</h3>
      </div>
      <div className="border-l mt-4 ml-3 px-4 py-2">
        <div>
          <ExternalLink href="https://twitter.com/yamachoo567">
            Twitter
          </ExternalLink>
        </div>
        <div className="mt-2">
          <ExternalLink href="https://github.com/yamachoo">Github</ExternalLink>
        </div>
      </div>
    </div>
  )
}
