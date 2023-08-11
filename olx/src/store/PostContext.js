import { createContext,useState  } from "react"; 
import Create from "../Components/Create/Create";

export const PostContext=createContext(null)

export default function  Post({children}){
    const [postDetails,setPostDetails]=useState()
    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )

}