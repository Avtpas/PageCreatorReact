
import React from "react"

import Container from './../../modules/Container'
import Element from './../../modules/Element'
import BaseModule from './../../modules/BaseModule'
import Modules from './../../modules/alias'
export default class TopContainer extends BaseModule{
    constructor(props,context){
        super(props,context,Modules);
        context = {
            top:this
        }
        this.state = {
            source : props.source
        }
        this._keys = {};
    }
    getChildContext() {
        return { top: this};
    }
    static get childContextTypes(){
        return {
            top:React.PropTypes.object
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            source:nextProps.source
        })
    }
    select(_key){
        let bool = (this._keys[_key]===1);
        if(!bool){
            this._keys[_key] = 1;
            return true
        }else{
            return false
        }
    }

    compile(){}

    analyze(){
        let json = this.state.source;

        let result;

        //(json instanceof Array)&& json.forEach((data,i)=>{
        result = this.renderContent(json) ||[];
        //});
        return result;
    }
    render(){
        return <div className="panel-body dcr-page-creator-container">
            {this.analyze.call(this)}
        </div>
    }
}