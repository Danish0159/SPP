import React from 'react';
import './newHomePage.css';
import { useHistory } from 'react-router-dom';

const Navbar2 = () => {

    const history = useHistory();

    return(
        <div className='navbar2'>
            <h1 className='navbar2-ulistitem' onClick={()=>history.push("/")}>Home</h1>
            <h1 className='navbar2-ulistitem' onClick={()=>history.push("/Welcome")}>Looking For</h1>
            <h1 className='navbar2-ulistitem'>Help</h1>
        </div>
    );
};

export default Navbar2;