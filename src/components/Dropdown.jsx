import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';

const Dropdown = ({ list, defaultValue, setterFunc }) => {
  console.log("Dropdown Component loaded with  withdefalt value", defaultValue);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          console.log("------------------------------------")
          console.log("Item value changed using pickup: ", itemValue);
          console.log("------------------------------------")
          setterFunc(itemValue);
          setSelectedValue(itemValue);
        }}
        style={styles.picker}
      >
        {list.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  picker: {
    width: 300,
    height: 50,
    borderWidth: 1.5,
    borderColor: '#ccc',
  },
})