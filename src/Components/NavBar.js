import React from 'react'
import pic from '../Assets/logo/dripz_logo_white.png'
import '../NavBar.css';
class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div className='nav-bar'>        
                    <img src= {pic} className='logo' alt='logo' />
                </div>
            </div>
        )
    }
}
export default NavBar;