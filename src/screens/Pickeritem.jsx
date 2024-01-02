import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateTypescale } from '../redux/slices/TypescaleSlice';


const DropdownExample = ({ list, defaultValue, keyVal }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const dispatch = useDispatch();

    const setReducerValues = () => {
        dispatch(updateTypescale({ keyVal, selectedValue }));
    }

    return (
        <>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                    setReducerValues();
                }}
                style={styles.picker}
            >
                {list.map((item, index) => (
                    <Picker.Item key={index} label={item.label} value={item.value} />
                ))}
            </Picker>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    picker: {
        width: 300,
        height: 50,
        borderWidth: 1.5,
        borderColor: '#ccc',
    },
});

export default DropdownExample;
