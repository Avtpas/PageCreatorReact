/**
 * Created by Administrator on 2016/3/14.
 */
'use strict';

import React from 'react'

export default class Container extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div className="dcr-page-creator-container">
            {this.props.children}
        </div>
    }
}

