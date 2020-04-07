import Link from "next/link"

const TopicBox = props => {
  return (
    <div class="bg-gray-200 flex items-center justify-around">
      <div class="w-full">
        <Link href={props.id}>
          <a class="">
            <span class="md:h-48 py-4 w-full inline-block flex items-center justify-around">
              {props.children}
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default TopicBox;