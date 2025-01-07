import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
  // yha destructure k liye {id} use kiya instead of id because {id} se directly id vaala param fetch ho jaayega because useParams hook returns
  // an object of all query parameters to agar saare chahiye hote to ek plain var like id/abc(kuch bhi naam ka variable) hi lete aur usme saare 
  // store kr lete aur phir . operator use kr k print krvaa lete neeche

  const {id} = useParams();
  return (
    <div>
        Query Parameter: {id}
    </div>
  )
}

export default Params