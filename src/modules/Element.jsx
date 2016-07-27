/**
 * Created by Administrator on 2016/3/14.
 */
'use strict';

import React from 'react'
import clazz from 'classnames'

export default class Element extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            selected : false
        };
    }
    static get contextTypes(){
        return {
            top:React.PropTypes.object
        }
    }
    componentWillMount(){
        while( !this._key || !this.context.top.select(this._key)){
            this._key = Math.round(Math.random() * 1000 * 1000);
        }

    }
    select(){

    }
    render(){
        //return <div className={clazz({"dcr-page-creator-element":true,"bg-danger":this.state.selected})} onClick={this.select.bind(this)}>
        //    {React.Children.only(this.props.children)}
        //</div>
        return <AbstractElement onClick={this.select.bind(this)}>
            React.Children.only>React.Children.only(this.props.children)
        </AbstractElement>
        //return <div>123231</div>
    }
}

class AbstractElement{
    render(){
        return React.Children.only(this.props.children)
    }
}