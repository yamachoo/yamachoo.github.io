import { ShareIcon } from '@heroicons/react/outline'

export function SnsList() {
  return (
    <div>
      <div className="font-bold text-3xl mt-10 flex items-center">
        <ShareIcon className="h-6 w-6 mr-1" />
        <h3>SNS</h3>
      </div>
      <div className="border-l mt-4 ml-3 px-4 py-2">
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
  )
}
