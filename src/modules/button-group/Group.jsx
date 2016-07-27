/**
 * Created by Administrator on 2016/3/14.
 */
'use strict';
import BaseModule from '../BaseModule'
const Button = require("./../button/Button").default
import React from 'react'

export default class Group extends BaseModule {
    constructor(props){
        super(props);
        console.log("Group")
    }
    renderInner(){
        const inner = this.renderContent(this.props.source.sub[0],{"button":Button});
        if(this.isEditMode){
            return <div className="dcr-page-creator-container delay-unwrap">
                {
                    inner
                }
            </div>
        }else{
            return inner
        }
    }
    render(){
        return <div className="btn-group">
            {this.renderInner.call(this)}
        </div>
    }
}

