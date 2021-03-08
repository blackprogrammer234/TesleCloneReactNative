import React from 'react';
import { Text, View, Pressable} from 'react-native';
import styles from './styles';

const CarButton = (props) =>{
    const {type , content, onPress} = props;
    const background = type == 'primary' ? 'black' : 'white';
    const textColor = type == 'primary' ? 'white' : 'black';
    return(
        <View style = {styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor : background}]}
                onPress={() =>
                    onPress()
                }>
                <Text style= {[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default CarButton