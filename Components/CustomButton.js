import { Pressable, StyleSheet, Text } from "react-native"

const CustomButton = ({ onPress, title }) => {
    return (
        <Pressable style={styles.toggleButton} onPress={onPress} >
            <Text style={styles.toggleButtonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    toggleButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        marginBottom:10
    },
    toggleButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },
})


export default CustomButton;