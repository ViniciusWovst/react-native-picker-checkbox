import React, { PureComponent } from 'react';
import {View, StyleSheet} from 'react-native';

export default class Triangle extends React.PureComponent {
    render() {
        vTriangleColor = 'black';
        vTriangleSize = 8;
        if (this.props.trianguleSize != null) {
            vTriangleSize = this.props.trianguleSize;
        }

        if (this.props.triangleColor != null) {
            vTriangleColor = this.props.triangleColor;
        }
        return (
            <View
                style={[{
                    borderBottomColor:vTriangleColor,
                    borderTopColor:vTriangleColor,
                    borderLeftWidth: vTriangleSize,
                    borderRightWidth: vTriangleSize,
                    borderTopWidth: vTriangleSize-1
                    },

                    StyleTriangle.triangle]}/>
        )
    }
}


StyleTriangle = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
        }
})