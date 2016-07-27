
import React from 'react';
import Element from './Element'

/**
 * 所有组件的基类
 */
export default class BaseModule extends React.Component{
    constructor(props,context,_Modules) {
        super(props);
        this._Modules = _Modules;
    }

    renderContent(jsonArray,_MS){
        let result = [];

        const Modules = this._Modules||_MS;

        (jsonArray instanceof Array)&& jsonArray.forEach((json,i)=>{
            let Module = Modules[json.type] && Modules[json.type];

            Module  && (result[i] = <Module key={i} source={json}/>)
        });

        return result;
    }

    static get isStandardModule(){
        return true
    }
    static get isEditMode(){
        return true
    }
}