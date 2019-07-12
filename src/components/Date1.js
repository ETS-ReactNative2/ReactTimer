import React, {Component} from 'react'

class Date1 extends Component{
    render(){
        return(
            <div>
                <p className="ma2">{new Date().toDateString()}</p>
            </div>
        )
    }
}

export default Date1;