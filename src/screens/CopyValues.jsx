import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { platformList } from '../constants'
import { Surface } from 'react-native-paper';
import Dropdown from '../components/Dropdown';

const CopyValues = ({ itemsData }) => {

  const [platform, setPlatform] = useState('web-css');


  return (
    <Surface style={styles.mainContainer}>
      <Surface style={styles.dropdownContainer}>
        <Surface style={styles.container} elevation={0}>
          <Text style={styles.dropdownTitle}>Platform</Text>
        </Surface>
        <Surface style={styles.container} elevation={0}>
          <Dropdown
            list={platformList}
            defaultValue={"web-css"}
            setterFunc={setPlatform}
          />
        </Surface>
      </Surface>
      <Surface style={styles.codeContainer}>
      <Text>CopyValues</Text>
      </Surface>
      
      <Surface style={styles.button} elevation={4}>
        <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }} >
          <Text style={styles.buttonText}> Copy Code</Text>
        </TouchableOpacity>
      </Surface>
    </Surface>
  )
}

export default CopyValues

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  dropdownContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVetical: 5,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  container: {
    margin: 5,
    flex: 1,
  },
  dropdownTitle: {
    marginLeft: 20,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    borderRadius: 25,
    height: 60,
    width: '92%',
    alignSelf: 'center',
  },
  buttonTouchable: {
    backgroundColor: 'pink',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    lineHeight: 30
  },
  codeContainer: {
    backgroundColor: '#CFCFDD',
    height: 800,
    marginBottom: 10,
    //backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
  }
})