import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Provider, Surface, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DropdownExample from '../components/Pickeritem.jsx';
import {
  scaleList, headingFontList, headingWeightList, headingLineHeightList,
  headingLetterSpacingList, bodyFontList, bodySizeList, bodyWeightList,
  bodyLineHeightList, bodyLetterSpacingList
} from '../constants.js';
import { useDispatch } from 'react-redux';
import { getTypescale } from '../redux/slices/TypescaleSlice.js';
import { BannerAd, BannerAdSize, MobileAds, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';

MobileAds()
  .initialize()
  .then(adapterStatuses => {
    // Initialization complete!
  });

const ChooseTypeScale = () => {
  const adUnitIdBanner = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
  const dispatch = useDispatch();
  //console.log("----------------------------------------------")
  const navigation = useNavigation();

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

          <Surface style={{ width: '90%' }}>
            <BannerAd
              unitId={adUnitIdBanner}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
          </Surface>
          <ScrollView style={styles.scrollViewContainer}>

            <Surface style={[styles.dropdownContainer, { marginTop: 0 }]}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Scale</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={scaleList}
                  defaultValue={1.25}
                  keyVal={"scale"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Heading Font Style</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={headingFontList}
                  defaultValue={"calibri"}
                  keyVal={"headingFont"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Heading Weight</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={headingWeightList}
                  defaultValue={100}
                  keyVal={"headingWeight"}
                />
              </Surface>
            </Surface>



            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Heading Line Height</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={headingLineHeightList}
                  defaultValue={1.5}
                  keyVal={"headingLineHeight"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Heading Letter Spacing</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={headingLetterSpacingList}
                  defaultValue={2}
                  keyVal={"headingLetterSpacing"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Body Font Style</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={bodyFontList}
                  defaultValue={"calibri"}
                  keyVal={"bodyFont"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Body Font Size</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={bodySizeList}
                  defaultValue={16}
                  keyVal={"bodySize"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Body Weight</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={bodyWeightList}
                  defaultValue={400}
                  keyVal={"bodyWeight"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Body Line Height</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={bodyLineHeightList}
                  defaultValue={1}
                  keyVal={"bodyLineHeight"}
                />
              </Surface>
            </Surface>

            <Surface style={styles.dropdownContainer}>
              <Surface style={styles.container} elevation={0}>
                <Text style={styles.dropdownTitle}>Body Letter Spacing</Text>
              </Surface>
              <Surface style={styles.container} elevation={0}>
                <DropdownExample
                  list={bodyLetterSpacingList}
                  defaultValue={1.5}
                  keyVal={"bodyLetterSpacing"}
                />
              </Surface>
            </Surface>

          </ScrollView>

          {/** 
          <TouchableOpacity style={styles.button} onPress={() => {
            dispatch(getTypescale());
          }}>
            <Text>Get Current store data in logs</Text>
          </TouchableOpacity>*/}

          <TouchableOpacity style={styles.button} onPress={() => {

            //console.log("Add running");
            //rewarded.show();
            navigation.navigate('GeneratedTypescale')
          }
          }
          >
            <Text> Generate Typescale</Text>
          </TouchableOpacity>

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
    paddingTop: 20,
  },
  headingContainer: {
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
  },
  headingLine2: {
    fontSize: 47.78,
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
    width: '92%',
    marginTop: 20,
    alignSelf: 'center'
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
    backgroundColor: 'pink',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10
  },
})