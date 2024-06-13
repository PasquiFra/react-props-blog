import Card from './card/PostCard'
import posts from '../assets/posts'


const Main = () => {
    const printTags = () => {
        const tagsToPrint = []
        posts.map(({ tags }) => {
            tags.map(tag => {
                if (!tagsToPrint.includes(tag)) {
                    tagsToPrint.push(tag)
                }
            })
        })
        return tagsToPrint
    };
    const tagsToPrint = printTags()

    return (
        <main className='container'>
            {posts.map((post, i) => {
                if (post.published) {
                    return <Card key={i} post={post}></Card>
                }
            })}
            <div className='mt-5 w-100'>
                <h5 className='text-center'>I tag presenti in questa pagina:</h5>
                <ul className='d-flex justify-content-center ps-0'>
                    {
                        tagsToPrint.map(tag => {
                            return <li key={`tag-${tag}`} className={`p-1 me-2`}><a href='#' className={`badge p-1 me-2 ${tag}`}>{tag}</a></li>
                        })
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main
