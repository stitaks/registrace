import { useState } from "react";



export const Registration = (() => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    if(user.username==='' && user.email.indexOf("@")!=-1)
        {setUser({...user, username: user.email.substring(0, user.email.indexOf("@"))})}

    return (
        <>
        <p>Registration</p>
        <form onSubmit={() => {}}>
        <label>
            <p>Email:</p>
          <input type="text" onChange={(e) => setUser({...user, email: e.target.value})} />
        </label>
        <p> </p>
        <label>
            <p>User Name</p>
            <input type="text" value={user.username}  onChange={(e) => setUser({...user, username: e.target.value})} />
        </label>
        <p> </p>
        <label>
            <p>Pasword</p>
            <input type="text" onChange={(e) => setUser({...user, password: e.target.value})} />
        </label>
        <p> </p>
        <label>
            <p>Pasword Confirm</p>
            <input type="text" onChange={(e) => setUser({...user, passwordConfirm: e.target.value})} />
        </label>
        <button type="button" onClick={() => {console.log(user)}}>Register</button>
      </form>
      </>
    )
})