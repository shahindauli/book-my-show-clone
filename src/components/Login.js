import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navg = useNavigate();
    const userCred = JSON.parse(localStorage.getItem("userCred"));
    const inlogin = {
        email: '',
        password: '',
        sstatus: false,
        unsstatus: false
    }
    const [login, setlogin] = useState(inlogin);
    function updatelogin(e) {
        let tempobj = {}
        tempobj[e.target.id] = e.target.value;
        setlogin({ ...login, ...tempobj })
    }
    function valdlogin() {
        if (login.email === "" || login.password === "") {
            setlogin({
                ...login,
                unsstatus: true,
                sstatus: false
            })
            return;
        }
        else {
            for (let i = 0; i < userCred.length; i++) {
                if (userCred[i].email === login.email) {
                    if (userCred[i].password === login.password) {
                        setlogin({
                            ...login,
                            unsstatus: false,
                            sstatus: true
                        })
                        localStorage.setItem("loggedUser", JSON.stringify(userCred[i]))
                        // if(userCred[i].cart!==undefined)
                        // localStorage.setItem('cart', JSON.stringify(userCred[i].cart))
                        setTimeout(() => {
                            navg("/")
                        }, 1000)
                        break;

                    }
                    else {
                        setlogin({
                            ...login,
                            unsstatus: true,
                            sstatus: false
                        })
                    }

                }
                else {
                    setlogin({
                        ...login,
                        unsstatus: true,
                        sstatus: false
                    })
                }
            }
        }
    }
    return (
        <>
            <div className="signup-cont">
                <div className="signup-conti">
                    <h1>Log In</h1><br /><br /><br />
                    {login.unsstatus && <div id="unsstatus">Login Unsuccesfull</div>}
                    {login.sstatus && <div id="sstatus" >Login Succesfull</div>}
                    <br></br>
                    <div className="username">
                        <label htmlFor="email">Email  </label> <br /> <input onChange={updatelogin} value={login.email} className="signupinp" id="email" type={'email'} />
                    </div><br></br>
                    <div className="password">
                        <label htmlFor="password">Password  </label><br /> <input onChange={updatelogin} value={login.password} className="signupinp" id="password" type={'password'} />
                    </div>
                    <br></br>
                    <div><button onClick={valdlogin} className="signupbtn bo">Log In</button></div>
                </div>
            </div>
        </>
    )
}
export default Login;