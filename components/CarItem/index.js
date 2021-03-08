import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles.js'
import CarButton from '../CarButton'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image} = props.car;
    return(
            <View style={styles.carContainer}>
                <ImageBackground source={image}
                    style={styles.image} >
                </ImageBackground>
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        {tagline}
                        {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                    
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                <CarButton type='primary' 
                content= {"Custom Order"}
                onPress={()=>{
                    console.warn("Custom order was pressed")
                }}
                />
                 <CarButton type='secondary' 
                content= {"Existing Inventory"}
                onPress={()=>{
                    console.warn("Existing inventory was pressed")
                }}
                />
                </View>
            </View>
    )
}

export default CarItem;