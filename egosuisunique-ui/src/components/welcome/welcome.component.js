import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

const welcome = ({currentUser}) => (
    <div>
        <div>Welcome!!</div>
        {
            currentUser ?  <Button onClick={() => auth.signOut()}>Log out</Button> : <Link></Link>
        }
       
    </div>
    
);

export default welcome;