import React, { PureComponent } from 'react';
import {StyleSheet, View, Modal} from 'react-native';

export default class ModalOVerlay extends React.PureComponent{

    renderContentModal() {
        return(
            <View style={[EstiloModalOverload.container, this.props.styleContainer]}>
                <View style={[this.props.styleContent, EstiloModalOverload.containerChildren]}>
                    {this.props.children}
                </View>
            </View>
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