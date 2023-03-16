import {useRouter} from 'next/router'
import clientPromise from "../../lib/mongodb";

const Index = ({data}) => {
    const router = useRouter();

    const{id} = router.query

  return (
    <div>
        <h1>{JSON.stringify(data)}</h1>
    </div>
  )
}


export async function getServerSideProps(context) {

    const client = await clientPromise;

    const db = client.db("test")
    
    const redirectUrl = await db.collection("url-shortener").find({}).toArray()
    console.log(redirectUrl)

    return {props: {redirectUrl}};
}

export default Index;