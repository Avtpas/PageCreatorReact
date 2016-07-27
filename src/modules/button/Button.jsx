/**
 * Created by Administrator on 2016/3/14.
 */
'use strict';
const html = require('./html.coffee')
import BaseModule from '../BaseModule'
import React from 'react'
export default class Button extends BaseModule {
    constructor(props){
        super(props);

        console.log("123",props.source)
        this.state = {
            param:props.source.param||{}
        }
    }
    edit() {
        var $dom_edit = $(html.html(this.element));
        //var $dom_edit = $("<div>");
        var obj = this;
        obj.title = "button";
        obj.$dom = $dom_edit;
        return obj;
    }
    view() {
        var [element,creator,key] = [this.element,this.creator,this.key];
        var obj = this.edit();

        obj.menu = false;
        obj.isView = true;

        if(element.ID || (element.param && element.param["code-onclick"])){
            var API = creator.API;
            creator.done(function(){
                obj.$dom.on("click",function(){
                    obj.exec(element.param["code-onclick"],API)
                })
            },{
                key,element
            });
        }
        return obj;
    }
    render(){
        return <a className='btn btn-primary'>{this.state.param.text||"按钮"}</a>
    }
}

