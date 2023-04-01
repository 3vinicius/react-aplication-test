import { PostCard } from "../../components/PostCard/index";
import './style.css';

export const Posts = ({post}) => {
  return (<div className='posts'>
          {post.map(post => (
            <PostCard 
              key={post.id}
              cover={post.cover}
              title={post.title}
              body={post.body}
            />
          )) }
        </div>
  )
}