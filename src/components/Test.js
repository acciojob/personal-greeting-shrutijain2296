import React, {useState} from "react";

const Test = () =>{
    let [user, setUser] = useState("");
    console.log("user", user);

    return(
        <div>
            <label>Enter your name:</label><br />
            <input type = "text" onChange = {(event) => setUser(event.target.value)} />

            {
                user.length > 0 && <p>Hello {user}</p>
            }
            
        </div>
    )
}
export default Test;