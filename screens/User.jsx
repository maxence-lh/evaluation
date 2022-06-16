import { StyleSheet, View ,Text } from 'react-native';
import { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';

export default function User() {
    const [link, setLink] = useState(''); 

    return (
        <View>
            <Text style = {styles.title} >Login</Text>
            <TextInput
                label="Username"
                mode="outlined"
                style={styles.link}
                value={link}
                onChangeText={text => setLink(text)}
            />
            <TextInput
                label="Pasword"
                mode="outlined"
                style={styles.link}
                value={link}
                onChangeText={text => setLink(text)}
            />
            <View style={{flexDirection:"row"}}>
                <Button
                    mode="text"
                    style={styles.resetButton}
                    onPress={() => []}
                >
                    Reset
                </Button>
                <Button
                    icon="key"
                    mode="contained"
                    style={styles.loginButton}
                    onPress={() => []}
                >
                    Login
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        fontFamily : 'Roboto',
        fontStyle : 'normal',
        textDecoration:"bold",
        height: 24,
        textAlign: "center",
        marginTop: 50,
    },

    link: {
        marginBottom: 16,
        marginHorizontal: 30,
    },

    resetButton: {
        alignSelf: 'flex-start',
        color:"#6200EE",
        marginLeft:23,
    },

    loginButton: {
        width: 120,
        alignSelf: 'flex-end',
        marginRight: 23,
        marginLeft: 160,
    },

});