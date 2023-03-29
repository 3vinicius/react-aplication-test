import { PostCard } from "../../components/PostCard/index";
import './style.css';

export const Posts = ({post}) => {
  return (<div className='posts'>
          {post.map(post => (
            <PostCard 
              key={post.id}
              atribute={post}
            />
          )) }
        </div>
  )
}