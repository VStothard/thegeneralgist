import MainLayout from '../../layouts/MainLayout'
import { useRouter} from 'next/router';

const Post = () => {
    const router = useRouter();
  return (
    <MainLayout >
        <div className="text-center my-8">
            <h1 className="text-2xl">A Post</h1>
            <p className="my-2">Post slug: {router.query.id}</p>
        </div>
    </MainLayout>
  )
}

export default Post;