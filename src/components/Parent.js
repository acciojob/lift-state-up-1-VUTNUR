import React,{useState} from "react";
import Child from "./Child";
const Parent=()=>{
    let [value, setValue]=useState(false)
    return (
        <div className="parent">
            
            <h1>Parent Component</h1>
            <Child value={setValue}/>
        </div>
    )
}
export default Parent;