import React, { PureComponent } from 'react';
import {StyleSheet, View, Modal} from 'react-native';

export default class ModalOVerlay extends React.PureComponent{

    renderContentModal() {
        return(
            <View style={[StyleModalOverload.container, this.props.styleContainer]}>
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

StyleModalOverload = StyleSheet.create({
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
