import React from 'react';
import { Link} from 'react-router-dom'


class NotFound extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
               <Link to="/ticket">火车票 </Link>
              
               
            </div>
        );
    }
}

export default NotFound;