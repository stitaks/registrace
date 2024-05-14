import { useState } from "react";

interface User {
    username:string,
    email:string,
    password:string,
    passwordConfirm:string,
}



export const Registration = (() => {
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
        <button type="submit">Submit</button>
      </form>
      </>
    )
})