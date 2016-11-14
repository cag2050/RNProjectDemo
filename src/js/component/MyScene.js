    /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
    constructor(props){
        super(props);
        this.state = {
            currIndex:1,
            article:["article1","article2","article3","article4"]
        }
    }
  static defaultProps = {
    title:'页面1'
  }
  static propTypes = {
    title:PropTypes.string.isRequired,
    onForward:PropTypes.func.isRequired,
    onBack:PropTypes.func.isRequired
  }
  componentDidMount(){
    this.setState({
        article:this.state.article[this.state.currIndex]
    })
  }
  render() {
   console.log(this.state.currIndex);
    return (
      <View >
        <Text>当前页面标题：{this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
            <Text>前进</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
            <Text>后退</Text>
        </TouchableHighlight>
        <Text>{this.state.article}</Text>
        <Text>Copyright 山水一程</Text>
      </View>
    );
  }
}


