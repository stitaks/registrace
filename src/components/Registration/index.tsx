import { useState } from "react";



export const Registration = (() => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    return (
        <>
        <p>Registration</p>
        <form onSubmit={() => {}}>
        <label>
            <p>Email:</p>
          <input name="email" />
        </label>
        <p> </p>
        <label>
            <p>User Name</p>
            <input name="username" />
        </label>
        <p> </p>
        <label>
            <p>Pasword</p>
            <input name="password" />
        </label>
        <p> </p>
        <label>
            <p>Pasword Confirm</p>
            <input name="passwordConfirm" />
        </label>
        <button type="submit">Register</button>
      </form>
      </>
    )
})