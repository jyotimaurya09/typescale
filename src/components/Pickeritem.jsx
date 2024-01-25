import { Picker } from '@react-native-picker/picker';
import React, { memo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTypescale } from '../redux/slices/TypescaleSlice';

const DropdownExample = memo(({ list, defaultValue, keyVal }) => {
    //console.log("Component loaded :",keyVal, "     withdefalt value" , defaultValue);
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const dispatch = useDispatch();
       
    return (
        <>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                    //console.log("------------------------------------")
                    //console.log("Item value changed using pickup: ", itemValue);
                    //console.log("------------------------------------")
                    setSelectedValue(itemValue);
                    dispatch(updateTypescale({ key: keyVal, value: itemValue }));
                    
                }}
                style={styles.picker}
            >
                {list.map((item, index) => (
                    <Picker.Item key={index} label={item.label} value={item.value} />
                ))}
            </Picker>
        </>
    );
});

const styles = StyleSheet.create({
    picker: {
        width: 200,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#ccc',
    },
});

export default DropdownExample;
