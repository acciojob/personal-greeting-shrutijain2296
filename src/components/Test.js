import React, {useState} from "react";

const Test = () =>{
    let [name, setName] = useState("");

    function handleChange(event){
        setName(event.target.value);
    }
   

    return(
        <div>
            <label>Enter your name:</label><br />
            <input type = "text" onChange = {handleChange} />
            <p>{"Hello " + name + "!"}</p>
            
        </div>
    )
}
export default Test;