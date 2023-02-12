import React from 'react';
import { Text,StyleSheet } from 'react-native';

import Colors from '../constants/colors';
const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color: Colors.accent500,
        textAlign:'center',
        padding:12, 
        borderWidth:2,
        borderColor: Colors.accent500,
    }
})


export default Title;