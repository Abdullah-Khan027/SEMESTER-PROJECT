import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'


export const Final = () => {
    return (
        <div>
            <h1 className="f">Your Account Has Been Created</h1>
            <h3 className="f">Press OK Button To Go To SignIn Page</h3>
           <h3 className="ff"> <ReactBootStrap.Button variant="light"  type="submit">
           <Link to="Signin">    OK    </Link>
  </ReactBootStrap.Button></h3>

  <hr/>
        </div>
    )
}
