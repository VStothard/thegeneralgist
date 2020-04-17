import Link from "next/link"

const TopicBox = props => {
  return (
    <div className="bg-gray-200 flex items-center justify-around">
      <div className="w-full">
        <Link href="/topics/[id]" as={`/topics/${props.id}`}>
          <a className="">
            <span className="md:h-48 py-4 w-full inline-block flex items-center justify-around">
              {props.children}
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default TopicBox;