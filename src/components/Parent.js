import React,{useState} from "react";
import Child from "./Child";
const Parent=()=>{
    let [value, setValue]=useState(false)
    return (
        <div className="parent">
            
            <p>Parent Component</p>
            <Child value={setValue}/>
        </div>
    )
}
export default Parent;