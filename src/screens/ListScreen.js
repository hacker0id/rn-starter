import React from "react";

import { View, Text, StyleSheet, FlatList } from 'react-native';


const ListScreen = () => {
    const people = [
        { name: 'Ayush', desig: 'Founder' },
        { name: 'Faiza', desig: 'HR' },
        { name: 'Khalid', desig: ' Tech Lead' },
        { name: 'Razil', desig: 'Technical Product Manager' },
        { name: 'Raakib', desig: 'Associate Engineer' },
        { name: 'Jyoti', desig: 'Product Manager' },

    ];
    return (
        <View>
            <FlatList

                renderItem={({ item, index }) => {
                    return <Text style={{ marginVertical: 10, fontSize: 20 }}>Name : {item.name}{'\n'}Designation : {item.desig}</Text>
                }}
                data={people}
                keyExtractor={
                    (item, index) => {
                        console.log(item.name, index);
                        return item.name + index;

                    }


                }


            />
        </View>
    );
};

export default ListScreen;