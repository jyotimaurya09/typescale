import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Surface, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { SegmentedButtons } from 'react-native-paper';
import DemoApp from './DemoApp';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import CopyValues from './CopyValues';
import { addSavedTypescale } from '../redux/slices/SavedTypescale';
import ShowTypescale from './ShowTypescale';


const GeneratedTypescale = () => {
  const [segmentedButtonVal, setSegmentedButtonVal] = useState('page');

  const typescale = useSelector((state) => state.typescale);
  const [typescaleItems, setTypescaleItems] = useState(typescale.data || []);

  const dispatch = useDispatch();
  //console.log(JSON.stringify(typescale.data));
  console.log("typescaleItems: ", typescaleItems);
  const navigation = useNavigation();


  return (
    <Surface elevation={3} style={styles.mainContainer}>
      <Surface style={styles.headingContainer} elevation={0}>

        <TouchableOpacity style={styles.headingButton} onPress={() => navigation.goBack()}>
          <Icon name="leftcircle" size={32} color={'black'} />
          <Text>Back</Text>
        </TouchableOpacity>

        <SegmentedButtons
          style={styles.segmentedButtonStyle}
          value={segmentedButtonVal}
          onValueChange={setSegmentedButtonVal}
          buttons={[
            { value: 'page', label: 'Demo', },
            { value: 'typescale', label: 'Typescale' },
            { value: 'code', label: 'Code' },
          ]}
        />

        <TouchableOpacity style={styles.headingButton} onPress={() => {
          dispatch(addSavedTypescale(typescaleItems))
        }}>
          <Icon name="save" size={32} color={'gray'} />
          <Text>Save</Text>
        </TouchableOpacity>
      </Surface>

      <Surface style={styles.bodyContainer}>
        {
          segmentedButtonVal === "page" ? <DemoApp itemsData={typescaleItems} /> :
            segmentedButtonVal === "typescale" ? <ShowTypescale itemsData={typescaleItems} />
              : <CopyValues itemsData={typescaleItems} />}
      </Surface>
    </Surface >
  )
}

export default GeneratedTypescale

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    padding: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2.5
  },
  headingButton: {
    alignItems: 'center',
  },
  segmentedButtonStyle: {
    width: '60%',
    marginHorizontal: 40
  },
  bodyContainer: {
    flex: 1,
    width: '90%',
    backgroundColor: '#CFCFDD',
  },
})