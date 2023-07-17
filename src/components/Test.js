import React, {useState} from "react";

const Test = () =>{
    let [user, setUser] = useState("");

    function handleChange(event){
        setUser(event.target.value);
    }
   

    return(
        <div>
            <label>Enter your name:</label><br />
            <input type = "text" onChange = {handleChange} />
            <p>{"Hello" + user + "!"}</p>
            
        </div>
    )
}
export default Test;