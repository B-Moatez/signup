import React, { Component } from 'react'
import Simple from '../signup';
import Signin from '../signin';

class Connection extends Component {
    constructor(props) {
      super(props)
      this.state = { isActive: false

    }

    }
    render() {
        return(
<div>
    <Simple  />
    <Signin />
</div>
        )
    }
}


export default Connection
