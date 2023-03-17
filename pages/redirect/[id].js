import clientPromise from "../../lib/mongodb";
import {useEffect} from "react"
import {createLink} from "../../lib/utils";

const Index = ({redirectUrl}) => {
  useEffect(() => {
    if(redirectUrl)
      window.location.href = "redirectUrl";
    else
      window.location.href = "/";
  }, []);

  return (
    <div>
        <h1>{redirectUrl}</h1>
    </div>
  )
}


export async function getServerSideProps(context) {

    const client = await clientPromise;

    const {id} = context.query;
    try{
    const db = client.db("test")
    
    const redirectUrl = await db.collection("url-shortener").find({id}).toArray()
    const {url} = redirectUrl[0]
    return {props: {redirectUrl: createLink(url)}};
    }
    catch(e){
      return {props: {redirectUrl: null}}
    }
   
}

export default Index;