import { useState } from "react";
import {createLink} from "../lib/utils"

export default function Home() {
  const [url, setUrl] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const [nationality, setNatonality] = useState(typeof window !== 'undefined' ? navigator.language.toString() : "");

  

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
        <input type='text' value={url} onChange={(e)=> {setUrl(e.target.value);setRedirectUrl(createLink(e.target.value))}}/>
        {redirectUrl !== "" && redirectUrl !== "Invalid url" ? (<a href={redirectUrl} target="_blank">{redirectUrl}</a>): null}
      </div>

    </div>
  )
}
