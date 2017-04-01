import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity as Touch,
    InteractionManager,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default Result = (props) => (
    <View style={styles.contaner}>
        <View style={styles.toolbar}>
            <Touch
                onPress={event => {
                    props.navigator.replace({
                        id: 1,
                        data: {},
                    });
                } }
                >
                <MaterialIcons
                    name='arrow-back'
                    color='#fff'
                    size={26}
                    />
            </Touch>
            <Text style={styles.toolbarTitle}>
                扫描结果
            </Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.text}>
                {props.data.data}
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        backgroundColor: '#fff',
    },
    toolbar: {
        height: 55,
        backgroundColor: '#333',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toolbarTitle: {
        color: '#fff',
        fontSize: 20,
        margin: 18,
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        padding: 50,
        color: 'rgba(30, 145, 255, 1)',
        fontSize: 20,
    },
})
