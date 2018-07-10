import React, { Component } from 'react';
import {View,Text,
        TouchableNativeFeedback,
        FlatList, CheckBox, Button, StyleSheet } from 'react-native';
import ModalOVerlay from './modalOverlay';
import Triangle from './Triangle';

export default class PickerCheckbox extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalVisible: false,
            checkedItems:[]
        };
    }

    //Events
    handleRequestClose(){
        OnConfirm = this.props.OnConfirm;

        if (OnConfirm != null) {
            vData = this.props.data;
            vItems = this.state.checkedItems;
            vKeyField = this.props.KeyField;
            vResult = vData.filter(function(item){
                return vItems.includes(item[vKeyField]);
            });
            OnConfirm(vResult);
        }
        this.setModalVisible(false);
    }

    handlePressPicker() {
        this.setModalVisible(!this.state.modalVisible);
    }

    handlePressCheckBox(pId){
        let tmp = this.state.checkedItems;

        if ( tmp.includes(pId) ) {
            tmp.splice(tmp.indexOf(pId),1);
        } else {
            tmp.push(pId);
        }
        this.setState({checkedItems: tmp});
    }
    
    //Other Methods
    setModalVisible(pVisible) {
        this.setState({modalVisible: pVisible});
    }

    ItemExistList(pKey) {
        return this.state.checkedItems.includes(pKey) ? true : false;
    }

    //render Methods
    renderArrow () {
        vArrowColor = 'black';
        if (this.props.arrowColor != null) {
            vArrowColor = this.props.arrowColor;
        }

        vArrowSize = null;
        if (this.props.arrowSize != null) {
            vArrowSize = this.props.arrowSize;
        }
        return (
            <View style={{
                justifyContent: 'center',
                alignItems:'flex-end',
                paddingRight:15,
                width:30}}>
                <Triangle
                    triangleColor={vArrowColor}
                    trianguleSize={vArrowSize}
                />
            </View>
        )
    }

    renderPlaceHolder (){
        vPlaceHolder = ''
        if (this.props.placeholder != null) {
            vPlaceHolder = this.props.placeholder
        }

        vColorTextPlaceHolder = '#899DAE';
        if (this.props.placeholderTextColor != null) {
            vColorTextPlaceHolder = this.props.placeholderTextColor
        }

        return(
            <View
                style={{
                    flex:1,
                    justifyContent: 'center',
                    paddingLeft:10
                }}>
                <Text style={[{
                    color:vColorTextPlaceHolder,
                    fontSize:16
                    }]}>{vPlaceHolder}</Text>
            </View>
        )
    }

    renderCheckBox(pItem) {
        return(
            <CheckBox
                value={this.ItemExistList(pItem[this.props.KeyField])}
                onValueChange={() => this.handlePressCheckBox(pItem[this.props.KeyField])}/>
        )
    }

    renderDescriptionCheckBox(pItem) {
        return (
            <View style={{paddingLeft:10}}>
                <Text>{pItem[this.props.DescriptionField]}</Text>
            </View>
        )
    }
    renderItems(pItem) {
        return(
            <TouchableNativeFeedback
                onPress={() => this.handlePressCheckBox(pItem[this.props.KeyField])}>
                    <View style={StyleCheckBoxListPicker.containerItem}>
                        {this.renderCheckBox(pItem)}
                        {this.renderDescriptionCheckBox(pItem)}
                    </View>
            </TouchableNativeFeedback>
        )
    }

    renderHeader(){
        if (this.props.headerComponent != null) {
            return this.props.headerComponent
        }
    }

    renderFooter(){
        ButtonTitle = 'Confirm';
        if (this.props.ConfirmButtonTitle != null) {
            ButtonTitle = this.props.ConfirmButtonTitle
        }

        return (
            <View style={StyleCheckBoxListPicker.containerFooter}>
                {this.renderConfirmButton(ButtonTitle)}
            </View>)
    }

    renderConfirmButton(pButtonTitle) {
        return(
            <Button
                onPress={() => this.handleRequestClose()}
                title={pButtonTitle}/>
        )
    }

    renderFlatList() {
        return (
            <FlatList
                style={{flex:1}}
                data={this.props.data}
                extraData = {this.state}
                renderItem={({item}) => this.renderItems(item)}
                keyExtractor={(item,index) => item.id}>       
            </FlatList>
        )
    }

    renderModal(){
        return (
            <View style={{
                flex:1,
                justifyContent:'center'
                }}>
                <View style={StyleCheckBoxListPicker.containerHeader}>
                    {this.renderHeader()}
                </View>
                {this.renderFlatList()}
                {this.renderFooter()}       
            </View>
        )
    }

    renderContainerModal = () => {
        return (
            <ModalOVerlay
                visible={this.state.modalVisible}    
                styleContent={StyleCheckBoxListPicker.containerModal}
                onRequestClose={() => this.handleRequestClose()}>
                {this.renderModal()}
            </ModalOVerlay>
        )
    }

    renderPicker() {
        return (
            <TouchableNativeFeedback
                onPress={() => this.handlePressPicker()}>
                <View style={[this.props.containerStyle, StyleCheckBoxListPicker.containerPicker]}>
                    {this.renderPlaceHolder()}
                    {this.renderArrow()}    
                </View>
            </TouchableNativeFeedback>
        )
    }

    render() {
        return (
            <View>
                {this.renderContainerModal()}
                {this.renderPicker()}
            </View>
        )
    };
}

StyleCheckBoxListPicker = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.55)',
        flexDirection:'column',
        justifyContent:'center'
    },

    containerModal:{
        flex:1,
        margin:20,
        padding:20

    },

    containerPicker:{
        flexDirection: 'row',
        height:45
    },
    containerHeader:{
        paddingBottom:10,
        flex:0
    },
    containerFooter:{
        flex:0,
        paddingTop:10
    },

    containerItem:{
        flexDirection:'row', 
        paddingBottom:5,
        alignItems:'center'
    }

});