import React from 'react'
import { TouchableOpacityProps, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

type FormButtonProps = TouchableOpacityProps & {
    label: string;
    
}
export const FormButton = ({ label, style, ...props }: FormButtonProps) => {
    return (
        <TouchableOpacity {...props} style={[style, styles.button]}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 8,
        paddingVertical: 12,
        backgroundColor: '#3b82f6',
        alignItems: 'center',
        marginTop: 24,
    },
    text:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }
})