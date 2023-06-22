import React from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faFacebook,faGoogle,faInstagram,faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';

const Login =()=>{
    return(
        <div className='login_container'>
            <div>
                <h1 style={{fontSize:'40px'}}>Login</h1>
            </div>
            <form className='login_fields'>
                <div className='login_input'>
              
                    <input type="text" name="username" placeholder='Tên đăng nhập' />
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'3px'}} className='login_input'>
                    <input type="password" name="password" placeholder='mật khẩu'/>
                    <a>Quen mat khau</a>
                </div>
               <Link to="/">                <input style={{cursor:'pointer'}} type="submit" value="Đăng nhập" />
</Link>

                <div className='login_bottom'>
                    <h1> Hoặc </h1>
                    <p>Đăng nhập bằng</p>
                    <div className='login_bottom_options'>
                        <a className="box" id='box1'><FontAwesomeIcon icon={faFacebook}/></a>
                        <a className="box" id='box2'><FontAwesomeIcon icon={faGoogle}/></a>
                        <a className="box" id='box3'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a className="box" id='box4'><FontAwesomeIcon icon={faTwitter}/></a>
                        <a className="box" id='box5'><FontAwesomeIcon icon={faPinterest}/></a>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login