import Header from "./component/hearder"

async function getPost(postId) {
    console.log('postId', postId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }



export default async function Page({params: {id}}){
    const data = await getPost(id)
    const {userId, title, body, id: postId} = data
    return(
        <>
        <Header title={title} designation={'software developer'} date={'12 May 2024'} name={'John Smith'}/>
        <p className="lead">{body}</p>
        <p className="lead">{body}</p>
        <p className="lead">{body}</p>
        <p className="lead">{body}</p>
        <p className="lead">{body}</p>
        </>
    )
} 