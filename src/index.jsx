//所有组件

//所有页面
'use strict'

import ReactDOM from "react/lib/ReactDOM"
import React from "react"

require("./assets/bootstrap/css/bootstrap.min.css");
require("./assets/css/style.css");


import TopContainer from "./stages/top-container/TopContainer"

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row">
            <p/>
            <div className="col-lg-3">
                <Menu/>
            </div>
            <div className="col-lg-6">
                <View />
            </div>
            <div className="col-lg-3">
                <Config/>
            </div>
        </div>
    }
}



class Config extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="ly-full panel panel-info">
            <div className="panel-heading">Configs</div>
            <div className="ly-full panel-body">
                <form className="form-horizontal">
                    <div className="container-fluid">
                        <h5>通用属性</h5>
                        <hr/>
                        <div className="row">
                            <div className="container-fluid">
                                <div className="form-group">
                                    <label className="control-label col-sm-3">ID</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="Comp_Id"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5>具体属性</h5>
                        <hr/>
                        <div className="row" id="config"></div>
                        <div className="row text-right"><a className="btn btn-primary fn-save">保存</a></div>
                    </div>
                </form>
            </div>
        </div>;
    }
}
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="ly-full panel panel-info">
            <div className="panel-heading">Components</div>
            <div className="panel-body">
            </div>
        </div>;
    }
}
class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {source: props.source}
    }

    componentWillMount() {
        const context = this;

        fetch("./mock/data-config.json")
            .then((res)=> {
                return res.json();
            }).then((json)=> {
                context.setState({source:json})
            })
    }
    render() {
        return <div className="panel panel-info">
            <div className="panel-heading">View
                <label className="checkbox-inline">
                    <input type="checkbox" value="dcr-page-creator-hasCompBorder"/> 组件边界
                </label>
                <label className="checkbox-inline">
                    <input type="checkbox" value="dcr-page-creator-hasContBorder"/> 容器边界
                </label>
                <label className="checkbox-inline pull-right">
                    <a>preview </a>
                    <a>compile </a>
                    <a>refresh </a>
                </label>
            </div>
            <TopContainer source={this.state.source} />
        </div>;
    }
}


ReactDOM.render(<App />, document.querySelector("#container"));