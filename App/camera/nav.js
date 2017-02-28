import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    BackAndroid,
    ToastAndroid,
} from 'react-native';

import Camera from './camera';
import Result from './result';

export default class Nav extends Component {

    constructor(props) {
        super(props);
    }

    renderScene = (route, navigator) => {
        this._navigator = navigator;

        if (route.id === 1) {
            return <Camera navigator={navigator} data={route.data} />;
        }

        if (route.id === 2) {
            return <Result navigator={navigator} data={route.data} />;
        }
    };

    onBackAndroid = (event) => {

        if (this._navigator && this._navigator.getCurrentRoutes().length > 1) {
            this._navigator.pop();
            return true;
        }

        if (this._lastBackPressed && this._lastBackPressed + 1000 >= Date.now()) {
            return false;
        }

        this._lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);

        return true;
    };

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    render() {
        return (
            <Navigator
                initialRoute={{ id: 1, data: {} }}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.PushFromLeft;
                } }
                />
        );
    }

}
