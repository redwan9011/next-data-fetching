import Link from "next/link";
export async function generateStaticParams() {
    const res = await fetch ('http://localhost:5000/post')
    const posts = await res.json()
    const ids = posts.map( post =>  {
        return {
            id: post.id + ""
        };
      
    })
    console.log(ids);
    return ids
  }
   

const detailPage = async({params}) => {
    console.log(params.id);
    const res = await fetch(`http://localhost:5000/post/${params.id}`)
    const detail =await res.json();
    console.log(detail);
    return (
        <div className="card">
            post details
            <h1>{detail.title}</h1>
            <h2>{detail.description}</h2>
            <Link href='/post' className="btn btn-accent">Back</Link>
        </div>
    );
};

export default detailPage;