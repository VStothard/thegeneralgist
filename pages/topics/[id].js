import MainLayout from '../../layouts/MainLayout'
import { useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import Link from 'next/link';

const Posts = (props) => {
    const router = useRouter();
    const posts = props.posts.filter(post => post.topics.includes(router.query.id))
    
    return posts.map(post => (
            <Link href="/post/[id]" as={`/post/${post.slug}`} key={post.id} >
                <a className="block p-2">
                    {post.title}
                </a>
            </Link>
        )
    )

}

const Topic = () => {
    const router = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postArr = [
            {
                title: 'A post about Alfie',
                id: 'alfie',
                topics: ['lifestyle'],
                slug: 'a-post-about-alfie'
            },
            {
                title: 'Learning React as a Vue Developer',
                id: 'react',
                topics: ['development'],
                slug: 'learning-react-as-a-vue-dev'
            },
            {
                title: 'A beginners guide to vegan food',
                id: 'food',
                topics: ['food', 'lifestyle'],
                slug: 'beginners-guide-to-vegan-food'
            },
            {
                title: 'Affinity Designer first impressions',
                id: 'affinity',
                topics: ['illustration'],
                slug: 'affinity-designer-first-impressions'
            },
            {
                title: 'How I began learning illustration',
                id: 'learning',
                topics: ['illustration'],
                slug: 'how-i-began-learning-illustration'
            }
        ]

        setPosts(postArr)
    }, []);

    return (
        <MainLayout>
            <div className="my-8 text-center">
                <h1 className="mt-12 text-2xl text-center">Topic: {router.query.id}</h1>
                <Posts posts={posts} className="my-2"></Posts>
            </div>
        </MainLayout>
    )
}

export default Topic;