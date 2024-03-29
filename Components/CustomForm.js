import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../ContextStore/ThemeContext';

const CustomForm = ({name,placeholder}) => {
    const { styles } = useContext(ThemeContext);

    return (
        <View style={CustomStyles.container}>
            <Text style={[CustomStyles.label,styles.text]}>{name} :</Text>
            <TextInput
                style={[CustomStyles.input,styles.text.color]}
                placeholder={placeholder}
                placeholderTextColor={styles.text.color}
            />
        </View>
    );
};

const CustomStyles = StyleSheet.create({
    container: {
        flex:3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 20,
        marginBottom:40
    },
    label: {
        fontSize: 20,
        padding: 6,
        marginRight: 10,
    },
    input: {
        height: 40,
        width:220,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
    },
});

export default CustomForm;
