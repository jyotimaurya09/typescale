import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Provider, Surface, Text } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addTypescale } from '../redux/slices/TypescaleSlice';

const ChooseTypeScale = () => {

  const navigation = useNavigation();

  const [scale, setScale] = useState(1.200);
  const [scaleShowDropDown, setScaleShowDropDown] = useState(false);
  const [headingFont, setHeadingFont] = useState('');
  const [showDropDownHF, setShowDropDownHF] = useState(false);
  const [headingWeight, setHeadingWeight] = useState(0);
  const [showDropDownHW, setShowDropDownHW] = useState(false);
  const [headingLineHeight, setHeadingLineHeight] = useState(0);
  const [showDropDownHLH, setShowDropDownHLH] = useState(false);
  const [headingLetterSpacing, setHeadingLetterSpacing] = useState(99);
  const [showDropDownHLS, setShowDropDownHLS] = useState(false);

  const [bodyFont, setBodyFont] = useState('');
  const [showDropDownBF, setShowDropDownBF] = useState(false);
  const [bodySize, setBodySize] = useState(16);
  const [showDropDownBS, setShowDropDownBS] = useState(false);
  const [bodyWeight, setBodyWeight] = useState(0);
  const [showDropDownBW, setShowDropDownBW] = useState(false);
  const [bodyLineHeight, setBodyLineHeight] = useState(0);
  const [showDropDownBLH, setShowDropDownBLH] = useState(false);
  const [bodyLetterSpacing, setBodyLetterSpacing] = useState(99);
  const [showDropDownBLS, setShowDropDownBLS] = useState(false);

  const dispatch = useDispatch();

  const setValues = () => {

    // Add to redux global state
    dispatch(addTypescale({
      scale, headingFont, headingWeight, headingLineHeight, headingLetterSpacing,
      bodyFont, bodySize, bodyWeight, bodyLineHeight, bodyLetterSpacing
    }))
    console.log("Did you see the values");
  }

  const scaleList = [{ label: "1.067 - Minor Second", value: 1.067 },
  { label: "1.125 - Minor Second", value: 1.125 },
  { label: "1.200 - Major Second", value: 1.200 },
  { label: "1.250 - Minor Third", value: 1.250 },
  { label: "1.333 - Major Third", value: 1.333 },
  { label: "1.414 - Minor Fourth", value: 1.414 },
  { label: "1.500 - Major Fourth", value: 1.500 },
  { label: "1.618 - Minor Second", value: 1.618 },
  ]

  const headingFontList = [{ label: "calibri", value: 'calibri' }]

  const headingWeightList = [
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "300", value: 300 },
    { label: "400", value: 400 },
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
    { label: "900", value: 900 },
  ]

  const headingLineHeightList = [
    { label: "1", value: 1 },
    { label: "1.15", value: 1.15 },
    { label: "1.2", value: 1.2 },
    { label: "1.25", value: 1.25 },
    { label: "1.3", value: 1.3 },
    { label: "1.35", value: 1.35 },
    { label: "1.4", value: 1.4 },
    { label: "1.45", value: 1.45 },
    { label: "1.5", value: 1.5 },
    { label: "1.55", value: 1.55 },
    { label: "1.6", value: 1.6 },
    { label: "1.65", value: 1.65 },
    { label: "1.7", value: 1.7 },
    { label: "1.75", value: 1.75 },
    { label: "1.8", value: 1.8 },
    { label: "1.85", value: 1.85 },
    { label: "1.9", value: 1.9 },
    { label: "1.95", value: 1.95 },
    { label: "2.0", value: 2 },
  ]

  const headingLetterSpacingList = [
    { label: "-0.08", value: -0.08 },
    { label: "-0.05", value: -0.05 },
    { label: "-0.025", value: -0.025 },
    { label: "-0.02", value: -0.02 },
    { label: "-0.015", value: -0.015 },
    { label: "-0.01", value: -0.01 },
    { label: "0", value: 0 },
    { label: "0.01", value: 0.01 },
    { label: "0.02", value: 0.02 },
    { label: "0.03", value: 0.03 },
    { label: "0.04", value: 0.04 },
    { label: "0.05", value: 0.05 },
    { label: "0.06", value: 0.06 },
    { label: "0.07", value: 0.07 },
    { label: "0.08", value: 0.08 },
  ]

  const bodyFontList = [{ label: "calibri", value: 'calibri' }]

  const bodySizeList = [
    { label: "14", value: 14 },
    { label: "16", value: 16 },
    { label: "18", value: 18 },
    { label: "20", value: 20 },
    { label: "22", value: 22 },
  ]

  const bodyWeightList = [
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "300", value: 300 },
    { label: "400", value: 400 },
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
    { label: "900", value: 900 },
  ]

  const bodyLineHeightList = [
    { label: "1", value: 1 },
    { label: "1.15", value: 1.15 },
    { label: "1.2", value: 1.2 },
    { label: "1.25", value: 1.25 },
    { label: "1.3", value: 1.3 },
    { label: "1.35", value: 1.35 },
    { label: "1.4", value: 1.4 },
    { label: "1.45", value: 1.45 },
    { label: "1.5", value: 1.5 },
    { label: "1.55", value: 1.55 },
    { label: "1.6", value: 1.6 },
    { label: "1.65", value: 1.65 },
    { label: "1.7", value: 1.7 },
    { label: "1.75", value: 1.75 },
    { label: "1.8", value: 1.8 },
    { label: "1.85", value: 1.85 },
    { label: "1.9", value: 1.9 },
    { label: "1.95", value: 1.95 },
    { label: "2.0", value: 2 },
  ]

  const bodyLetterSpacingList = [
    { label: "-0.08", value: -0.08 },
    { label: "-0.05", value: -0.05 },
    { label: "-0.025", value: -0.025 },
    { label: "-0.02", value: -0.02 },
    { label: "-0.015", value: -0.015 },
    { label: "-0.01", value: -0.01 },
    { label: "0", value: 0 },
    { label: "0.01", value: 0.01 },
    { label: "0.02", value: 0.02 },
    { label: "0.03", value: 0.03 },
    { label: "0.04", value: 0.04 },
    { label: "0.05", value: 0.05 },
    { label: "0.06", value: 0.06 },
    { label: "0.07", value: 0.07 },
    { label: "0.08", value: 0.08 },
  ]

  return (
    <Provider>
      <Surface elevation={3} style={styles.mainContainer}>
        <Surface style={styles.headingContainer} elevation={0}>
          <Text style={styles.headingLine1}>Create your own</Text>
          <Text style={styles.headingLine2}>TypeScale</Text>
        </Surface>
        <Surface style={styles.bodyContainer} elevation={0}>
          <Surface style={styles.contentTitleContainer} elevation={0}>
            <Text>Choose your Preference</Text>
          </Surface>

          <ScrollView style={styles.scrollViewContainer}>
            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Scale    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={scaleShowDropDown}
                showDropDown={() => setScaleShowDropDown(true)}
                onDismiss={() => setScaleShowDropDown(false)}
                value={scale}
                setValue={setScale}
                list={scaleList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Heading Font Style    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownHF}
                showDropDown={() => setShowDropDownHF(true)}
                onDismiss={() => setShowDropDownHF(false)}
                value={headingFont}
                setValue={setHeadingFont}
                list={headingFontList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Heading Weight    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownHW}
                showDropDown={() => setShowDropDownHW(true)}
                onDismiss={() => setShowDropDownHW(false)}
                value={headingWeight}
                setValue={setHeadingWeight}
                list={headingWeightList}
              />
            </Surface>


            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Heading Letter Height    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownHLH}
                showDropDown={() => setShowDropDownHLH(true)}
                onDismiss={() => setShowDropDownHLH(false)}
                value={headingLineHeight}
                setValue={setHeadingLineHeight}
                list={headingLineHeightList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Heading Letter Spacing    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownHLS}
                showDropDown={() => setShowDropDownHLS(true)}
                onDismiss={() => setShowDropDownHLS(false)}
                value={headingLetterSpacing}
                setValue={setHeadingLetterSpacing}
                list={headingLetterSpacingList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Body Font Style    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownBF}
                showDropDown={() => setShowDropDownBF(true)}
                onDismiss={() => setShowDropDownBF(false)}
                value={bodyFont}
                setValue={setBodyFont}
                list={bodyFontList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Body Font Size    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownBS}
                showDropDown={() => setShowDropDownBS(true)}
                onDismiss={() => setShowDropDownBS(false)}
                value={bodySize}
                setValue={setBodySize}
                list={bodySizeList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Body Weight    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownBW}
                showDropDown={() => setShowDropDownBW(true)}
                onDismiss={() => setShowDropDownBW(false)}
                value={bodyWeight}
                setValue={setBodyWeight}
                list={bodyWeightList}
              />
            </Surface>



            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Body Line Height    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownBLH}
                showDropDown={() => setShowDropDownBLH(true)}
                onDismiss={() => setShowDropDownBLH(false)}
                value={bodyLineHeight}
                setValue={setBodyLineHeight}
                list={bodyLineHeightList}
              />
            </Surface>

            <Surface style={styles.dropdownContainer} elevation={0}>
              <DropDown
                label={
                  <>
                    <Text>Body Letter Spacing    </Text>
                    <Icon name="caretdown" size={14} color={'black'} />
                  </>
                }
                mode={"outlined"}
                visible={showDropDownBLS}
                showDropDown={() => setShowDropDownBLS(true)}
                onDismiss={() => setShowDropDownBLS(false)}
                value={bodyLetterSpacing}
                setValue={setBodyLetterSpacing}
                list={bodyLetterSpacingList}
              />
            </Surface>



          </ScrollView>
          <Surface style={styles.buttonContainer} elevation={0}>
            <TouchableOpacity style={styles.button} onPress={() => {
              setValues();
              navigation.navigate('GeneratedTypescale');
            }}>
              <Text> Generate Typescale</Text>
            </TouchableOpacity>
          </Surface>
        </Surface>
      </Surface>
    </Provider>
  )
}

export default ChooseTypeScale

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headingContainer: {
    //backgroundColor: 'green',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    padding: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 2.5
  },
  headingLine1: {
    fontSize: 16,
    //alig
  },
  headingLine2: {
    fontSize: 47.78,
  },
  divider: {
    //color: 'black',
    height: 40,
  },
  bodyContainer: {
    flex: 1,
    width: '90%',
    paddingVertical: 20,
  },
  contentTitleContainer: {
    alignItems: 'flex-start',
  },
  scrollViewContainer: {
    width: '90%',
    margin: 20,
  },
  dropdownContainer: {
    paddingBottom: 20
  },
  buttonContainer: {
    width: '90%',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'pink',
    //padding: 5,
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})