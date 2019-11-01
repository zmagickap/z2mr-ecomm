import React from "react"
import SignIn from "../../components/sign-in/sign-in.comp"
import SignUp from "../../components/sign-up/sign-up.comp"

import "./sign-in-up.scss"

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage
