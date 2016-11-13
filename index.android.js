/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MyScene from './src/js/component/MyScene';
export default class RNProjectDemo extends Component {

  render() {
    return (
        <Navigator
            initialRoute = {{title:'首页',index:1}}
            renderScene ={(route,navigator) =>{

                return <MyScene
                        title ={ route.title}
                        currIndex = {route.index}
                        onForward={()=>{
                            const nextIndex = route.index +1;
                            navigator.push({
//                                title:'页面'+currIndex,
                                title:'页面'+nextIndex,
                                index:nextIndex,
//                                article:this.state.article
                            })
                        }}
                       onBack={()=>{
                            if(route.index > 0){
                                navigator.pop();
                            }
                       }}
                />
            }}
        />
    );
  }
}


AppRegistry.registerComponent('RNProjectDemo', () => RNProjectDemo);
