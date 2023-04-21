import React, {useState} from "react";
import style from "./Modal.scss"

const Modal = ({active, setActive}) => {
    const [loginActive, setLoginActive] = useState(true);
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className={loginActive ? "form-box.active" : "form-box"}>
                    <form className="form">
                        <span className="title">Sing up</span>
                        <span className="subtitle">Create a free accoung with your emial.</span>
                        <div className="form-container">
                            <input type="text" className="input" placeholder="Full Name"/>
                            <input type="email" className="input" placeholder="Email"/>
                            <input type="password" className="input" placeholder="Password"/>
                        </div>
                        <button>Sing up</button>
                    </form>
                    <div className="form-section">
                        <p>Have an account? <a onClick={() => setLoginActive(false)}>Log in</a></p>
                    </div>
                </div>

                <div className={loginActive ? "form-box2" : "form-box2.active"}>
                    <form className="form">
                        <span className="title">Sing up</span>
                        <span className="subtitle">Create a free accoung with your emial.</span>
                        <div className="form-container">
                            <input type="email" className="input" placeholder="Email"/>
                            <input type="password" className="input" placeholder="Password"/>
                        </div>
                        <button>Sing up</button>
                    </form>
                    <div className="form-section">
                        <p>Don't have an account? <a onClick={() => setLoginActive(true)}>Sing up!</a></p>
                    </div>
                </div>


            </div>
        </div>

    )
}


export default Modal;