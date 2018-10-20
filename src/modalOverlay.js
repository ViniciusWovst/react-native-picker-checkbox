import React, { PureComponent } from 'react';
import {StyleSheet, View, Modal, TouchableHighlight} from 'react-native';

export default class ModalOVerlay extends React.PureComponent{

    _handlePressBackModal(){
        pressBackModal = this.props.cancelable == null||this.props.cancelable;
        if (pressBackModal){
            this.props.onRequestClose();
        }
    }
    renderContentModal() {
        return(
            <TouchableHighlight 
                onPress={() => this._handlePressBackModal()}
                underlayColor='rgba(0, 0, 0, 0.55)'
                activeOpacity={1}
                style={[EstiloModalOverload.container, this.props.styleContainer]}>
                <View style={[this.props.styleContent, EstiloModalOverload.containerChildren]}>
                    {this.props.children}
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        const {...props} = this.props;
        return(
            <View>
                <Modal
                    {...props}
                    transparent={true}
                    animationType='fade'>
                    {this.renderContentModal()}
                </Modal>
            </View>
        )
    }
}

EstiloModalOverload = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.55)',
        flexDirection:'column',
        justifyContent:'center'
    },

    containerChildren:{
        backgroundColor:'white',
    },
})