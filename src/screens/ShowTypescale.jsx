import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SegmentedButtons, Surface, TextInput } from 'react-native-paper'

import Dropdown from '../components/Dropdown'

const ShowTypescale = ({ itemsData }) => {

  console.log("Got items inside Show typescale app: ", itemsData)
  const items = itemsData[0];


  const [text, setText] = React.useState("");

  const calculateValues = () => {
    const h1 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h2 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h3 = parseFloat((items.bodySize * items.scale * items.scale * items.scale * items.scale).toFixed(2));
    const h4 = parseFloat((items.bodySize * items.scale * items.scale * items.scale).toFixed(2));
    const h5 = parseFloat((items.bodySize * items.scale * items.scale).toFixed(2));
    const h6 = parseFloat((items.bodySize * items.scale).toFixed(2));
    const p = items.bodySize
    const large = parseFloat((items.bodySize * items.scale).toFixed(2));
    const small = parseFloat((items.bodySize / items.scale).toFixed(2));
    const headingLineHeight = items.headingLineHeight;
    const bodyLineHeight = items.bodyLineHeight;
    const headingLetterSpacing = items.headingLetterSpacing;
    const bodyLetterSpacing = items.bodyLetterSpacing;
    const headingWeight = items.headingWeight;
    const bodyWeight = items.bodyWeight;
    return { h1, h2, h3, h4, h5, h6, p, small, large, headingLineHeight, bodyLineHeight, headingLetterSpacing, bodyLetterSpacing, headingWeight, bodyWeight }
  }

  const { h1, h2, h3, h4, h5, h6, p, small, large, headingLineHeight, bodyLineHeight, headingLetterSpacing, bodyLetterSpacing, headingWeight, bodyWeight } = calculateValues();


  const renderTypescale = () => {
    return (
      <>
        <Text style={{ fontSize: h1, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h1 * headingLineHeight }}>
          {text === "" ? "Heading 1" : text}
        </Text>
        <Text style={{ fontSize: h2, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h2 * headingLineHeight }}>
          {text === "" ? "Heading 2" : text}
        </Text>
        <Text style={{ fontSize: h3, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h3 * headingLineHeight }}>
          {text === "" ? "Heading 3" : text}
        </Text>
        <Text style={{ fontSize: h4, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h4 * headingLineHeight }}>
          {text === "" ? "Heading 4" : text}
        </Text>
        <Text style={{ fontSize: h5, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h5 * headingLineHeight }}>
          {text === "" ? "Heading 5" : text}
        </Text>
        <Text style={{ fontSize: h6, fontWeight: headingWeight, letterSpacing: headingLetterSpacing, lineHeight: h6 * headingLineHeight }}>
          {text === "" ? "Heading 6" : text}
        </Text>
        <Text style={{ fontSize: p, fontWeight: bodyWeight, letterSpacing: bodyLetterSpacing, lineHeight: p * bodyLineHeight }}>
          {text === "" ? "Paragraph Body - normal " : text}
        </Text>
        <Text style={{ fontSize: small, fontWeight: bodyWeight, letterSpacing: bodyLetterSpacing, lineHeight: small * bodyLineHeight }}>
          {text === "" ? "Paragraph Body - small " : text}
        </Text>
      </>
    )
  }
  return (
    <Surface elevation={0} style={styles.mainContainer}>

      <Surface style={styles.dropdownContainer}>
        <Surface style={styles.container} elevation={0}>
          <Text style={styles.dropdownTitle}>Text</Text>
        </Surface>
        <Surface style={styles.container} elevation={0}>
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
          />
        </Surface>
      </Surface>

      <Surface elevation={4} style={styles.renderContainer}>

        <ScrollView style={styles.renderContainer} horizontal showsHorizontalScrollIndicator={true}>
          <Surface style={{ height: '100%' }} elevation={0}>
            <ScrollView showsVerticalScrollIndicator={true}>
              {renderTypescale()}
            </ScrollView>
          </Surface>
        </ScrollView>

      </Surface>

      <Surface style={styles.detailsContainer}>
        <Text style={styles.headingTable}>Heading Details</Text>
        <Surface style={styles.tableContainer} elevation={0}>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Font</Text>
            <Text style={styles.textLine2}>{items.headingFont}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Weight</Text>
            <Text style={styles.textLine2}>{headingWeight}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Letter Spacing</Text>
            <Text style={styles.textLine2}>{headingLetterSpacing}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Line Height</Text>
            <Text style={styles.textLine2}>{headingLineHeight}</Text>
          </Surface>
        </Surface>
      </Surface>

      <Surface style={styles.detailsContainer}>
        <Text style={styles.headingTable}>Body Details</Text>
        <Surface style={styles.tableContainer} elevation={0}>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Font</Text>
            <Text style={styles.textLine2}>{items.bodyFont}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Weight</Text>
            <Text style={styles.textLine2}>{bodyWeight}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Letter Spacing</Text>
            <Text style={styles.textLine2}>{bodyLetterSpacing}</Text>
          </Surface>
          <Surface style={styles.columnConatiner} elevation={0}>
            <Text style={styles.textLine1}>Line Height</Text>
            <Text style={styles.textLine2}>{bodyLineHeight}</Text>
          </Surface>
        </Surface>
      </Surface>
    </Surface>
  )
}

export default ShowTypescale

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    //height: '100%',
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
  renderContainer: {
    height: 600,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
  },
  detailsContainer:{
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 5
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnConatiner: {
    //backgroundColor: 'blue'
    padding: 5
  },
  textLine1: {
    //fontWeight: 'bold',
    //fontSize: 20
  },
  textLine2: {
    fontWeight: '100',
    //fontSize: 20
  },
  headingTable: {
    fontWeight: '900',
    //letterSpacing: 1.5,
  }
  
})