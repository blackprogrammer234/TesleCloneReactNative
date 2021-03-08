import React from 'react';
import { Text, View, FlatList, Dimensions} from 'react-native';
import CarItem from '../CarItem'
import styles from './styles.js';
import Cars from "./cars"


const CarList = (props) => {
    return(
        <View style={styles.container}>
            <FlatList
                data = {Cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment = {'start'}
                decelerationRate= {'fast'}
                showsVerticalScrollIndicator= {false}
                snapToInterval= {Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarList;