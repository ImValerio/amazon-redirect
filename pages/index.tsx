import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const [nationality, setNatonality] = useState(typeof window !== 'undefined' ? navigator.language.toString() : "");

  const getASIN = (link:string)=>{
    if(!link.includes("amazon"))
      return null;
    
    const startASIN = link.split("dp/")[1];
    const endASIN = startASIN.indexOf("/")

    return startASIN.substring(0,endASIN);
  }  

  const createLink = (link:string)=>{
    const ASIN = getASIN(link);

    if(!ASIN)
      setRedirectUrl("Invalid url")
    else
      setRedirectUrl(`https://www.amazon.${nationality.substring(0,2)}/dp/${ASIN}`)
  }

  return (
    <div className="container">
       <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }
    `}</style>
      <div  className="box">
        <h1 className="title">Amazon Redirect</h1>
        <input type='text' value={url} onChange={(e)=> {setUrl(e.target.value);createLink(e.target.value)}}/>
        {redirectUrl !== "" ? (<a href={redirectUrl} target="_blank">{redirectUrl}</a>): null}
      </div>

    </div>
  )
}
