import TopNavigation from '../components/TopNavigation'
import MainHeader from '../components/MainHeader'
import TopicBox from '../components/TopicBox'

const topics = [
  {
    name: 'Illustration',
    id: 'illustration'
  },
  {
    name: 'Food',
    id: 'food'
  },
  {
    name: 'Lifestyle',
    id: 'lifestyle'
  }
]

const MainLayout = props => (
  <div>
    <TopNavigation />
    <div className="container mx-auto">
      <MainHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        { topics.map((topic) => {
          return (
            <TopicBox key={`topic_${topic.id}`} id={topic.id}>
              {topic.name}
            </TopicBox>
          )
        })}
      </div>
      {props.children}
    </div>
  </div>
)

export default MainLayout;