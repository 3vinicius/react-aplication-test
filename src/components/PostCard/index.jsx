import './styles.css';

export const PostCard = (prop,{key}) =>{
  const post = prop.atribute
  return(
  <div key={key} className="post">
              <img src={post.cover} alt={post.title} />
            <div className="post-content">
              <h1>{post.title}</h1> 
              <p>{post.body}</p>
            </div>
            </div>
  )
}