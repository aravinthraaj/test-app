import React,{useEffect,useState} from 'react'
import './styles.css'

function Nav() {
    const [show,hanldeShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            hanldeShow(true);
        }else{
            hanldeShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar);
    })
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__container">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" className="nav__logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" className="nav__avatar" />
            </div>

        </div>
    )
}

export default Nav
