import React,{useState} from "react";

const Child=({value})=>{
    let[a, setA]=useState(false)
   function change(){
    value(true);
    if(!a){
        setA(true)
    }
    else{
        setA(false)
    }
    
   }
    return (
        <div className="child">
            <button onClick={change}>Show Modal</button>
            {
              a && <div>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                </div>
            }
        </div>
    )
}
export default Child;