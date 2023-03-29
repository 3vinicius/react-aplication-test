export const loadPosts = async () =>{
  const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
  const[post,photo] = await Promise.all([postResponse,photosResponse])

  const constphotoJson = await photo.json()
  const constPostJson = await post.json();

  const postsAndPhotos = constPostJson.map((post, index)=>{
    return {...post,cover:constphotoJson[index].url}
  });

  return postsAndPhotos;
}