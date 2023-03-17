// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from "../../lib/mongodb";



export default async function handler(
  req,
  res
) {
  const client = await clientPromise;

  const db = client.db("test");

  await db.collection("url-shortener").insertOne({id: 'test', url: 'test.it'})

  

}
