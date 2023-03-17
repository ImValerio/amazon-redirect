export const isValidUrl = (url:string)=>{

    return url.includes("amazon") && url.includes("dp/");
  }

export const getASIN = (link:string)=>{
    if(!isValidUrl(link))
      return null;
    
    const startASIN = link.split("dp/")[1];
    const endASIN = startASIN.indexOf("/")

    return startASIN.substring(0,endASIN);
  }  

export const createLink = (link:string)=>{
    const ASIN = getASIN(link);
    const nationality = (typeof window !== 'undefined' ? navigator.language.toString() : "")

    if(!ASIN)
     return "Invalid url"
    else
      return `https://www.amazon.${nationality.substring(0,2)}/dp/${ASIN}`
  }


