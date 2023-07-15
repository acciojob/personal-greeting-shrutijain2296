import React, {useState} from "react";

const Test = () =>{
    let [user, setUser] = useState("");
    console.log("user", user);

    return(
        <div>
            <input type = "text" onChange = {(event) => setUser(event.target.value)}/>

            {
                user.length > 0 && <h2>Hello {user}</h2>
            }
            
        </div>
    )
}
export default Test;