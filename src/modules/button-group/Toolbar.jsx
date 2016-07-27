/**
 * Created by Administrator on 2016/3/14.
 */
'use strict';
import BaseModule from '../BaseModule'
const Group = require("./Group").default;
import React from 'react'
export default class Toolbar extends BaseModule {
    constructor(props){
        super(props);
        console.log("Toolbar")
    }

    render(){
        return <div className="container-fluid">
            <div className="btn-toolbar dcr-page-creator-container ">
                {
                    this.renderContent(this.props.source.sub[0],{"button-group":Group})
                }
            </div>
        </div>
    }
}

