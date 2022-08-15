import React from "react";


function SignIn() {
    return (
        <div className="signup">
            <form className="form-group">
                <div>
                    <label className="fs-5">Username :</label><br />
                    <input className="form-input m-2 p-1 rounded " type="text" placeholder="Enter your username..." style={{width:300}}></input>
                </div>
                <div className="pwd">
                    <label className="fs-5">Password :</label><br />
                    <input className="form-input m-2 p-1 rounded" type="text" placeholder="Enter your password" style={{width:300}}></input>
                </div>
                <div>
                    <button className="btn btn-outline-dark">Sigin</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;