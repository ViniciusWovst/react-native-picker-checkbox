/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PickerCheckBox from 'react-native-picker-checkbox';

const items = [
  {
    itemKey:1,
    itemDescription:'Item 1'
    },
  {
    itemKey:2,
    itemDescription:'Item 2'
    },
  {
    itemKey:3,
    itemDescription:'Item 3'
    }
];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }

  render() {
    return(
      <PickerCheckBox
        data={items}
        headerComponent={<Text style={{fontSize:25}} >items</Text>}
        OnConfirm={(pItems) => this.handleConfirm(pItems)}
        ConfirmButtonTitle='OK'
        DescriptionField='itemDescription'
        KeyField='itemKey'
        placeholder='select some items'
        arrowColor='#FFD740'
        arrowSize={10}
        placeholderSelectedItems ='$count selected item(s)'
        />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
