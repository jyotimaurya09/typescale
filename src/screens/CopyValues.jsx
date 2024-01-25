import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { platformList } from '../constants'
import { Surface } from 'react-native-paper';
import Dropdown from '../components/Dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import Clipboard from '@react-native-clipboard/clipboard';
import { webCss } from '../data/cssFile';
import { reactFile } from '../data/reactFile';

const CopyValues = ({ itemsData }) => {

  const [platform, setPlatform] = useState('web-css');
  const [copiedText, setCopiedText] = useState('');

  const items = itemsData[0];

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


  useEffect(() => {
    let textToCopy;

    if (platform === 'web-css') {
      textToCopy = renderCodeWebCss();
    } else if (platform === 'react-native-css') {
      textToCopy = renderCodeReactNativeCss();
    } else {
      textToCopy = 'Something went wrong';
    }
    setCopiedText(textToCopy);
  }, [platform]);

  const copyToClipboard = () => {
    //console.log("Copied String is: ", typeof copiedText);
    Clipboard.setString(copiedText);
  };

  const renderCodeWebCss = () => {

    let textToCopy = webCss;
    textToCopy = textToCopy.replace("HEADINGWEIGHT", headingWeight);
    textToCopy = textToCopy.replace("HEADINGFONTSTYLE", "calibri");
    textToCopy = textToCopy.replace("HEADINGLETTERSPACING", headingLetterSpacing);
    textToCopy = textToCopy.replace("HEADINGLINEHEIGHT", headingLineHeight);
    textToCopy = textToCopy.replace("H1FONT", h1);
    textToCopy = textToCopy.replace("H2FONT", h2);
    textToCopy = textToCopy.replace("H3FONT", h3);
    textToCopy = textToCopy.replace("H4FONT", h4);
    textToCopy = textToCopy.replace("H5FONT", h5);
    textToCopy = textToCopy.replace("H6FONT", h6);
    textToCopy = textToCopy.replace("BODYWEIGHT", bodyWeight);
    textToCopy = textToCopy.replace("BODYFONTSTYLE", "calibri");
    textToCopy = textToCopy.replace("BODYLETTERSPACING", bodyLetterSpacing);
    textToCopy = textToCopy.replace("BODYLINEHEIGHT", bodyLineHeight);
    textToCopy = textToCopy.replace("PSIZE", p);
    textToCopy = textToCopy.replace("SMALLSIZE", small);
    console.log("Text to copy: ", textToCopy);
    return textToCopy
  }

  const renderCodeReactNativeCss = () => {
    let textToCopy = reactFile;
    textToCopy = textToCopy.replace(/HEADINGWEIGHT/g, headingWeight);
    textToCopy = textToCopy.replace(/HEADINGFONTSTYLE/g, "calibri");
    textToCopy = textToCopy.replace(/HEADINGLETTERSPACING/g, headingLetterSpacing);
    textToCopy = textToCopy.replace(/HEADINGLINEHEIGHT/g, headingLineHeight);
    textToCopy = textToCopy.replace("H1FONT", h1);
    textToCopy = textToCopy.replace("H2FONT", h2);
    textToCopy = textToCopy.replace("H3FONT", h3);
    textToCopy = textToCopy.replace("H4FONT", h4);
    textToCopy = textToCopy.replace("H5FONT", h5);
    textToCopy = textToCopy.replace("H6FONT", h6);
    textToCopy = textToCopy.replace(/BODYWEIGHT/g, bodyWeight);
    textToCopy = textToCopy.replace(/BODYFONTSTYLE/g, "calibri");
    textToCopy = textToCopy.replace(/BODYLETTERSPACING/g, bodyLetterSpacing);
    textToCopy = textToCopy.replace(/BODYLINEHEIGHT/g, bodyLineHeight);
    textToCopy = textToCopy.replace("PSIZE", p);
    textToCopy = textToCopy.replace("SMALLSIZE", small);
    console.log("Text to copy: ", textToCopy);
    return textToCopy
  }

  const changePreferenceValues = () => {
    //Read file and change it.
  }

  useEffect



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
        <TouchableOpacity onPress={() => copyToClipboard()} style={styles.copySymbol}>
          <Icon name="copy1" size={26} color={'gray'} />
        </TouchableOpacity>
        <Text>
          {platform === 'web-css' ? renderCodeWebCss()
            : platform === 'react-native-css' ? renderCodeReactNativeCss()
              : "Something went wrong"
          }
        </Text>

      </Surface>

      <Surface style={styles.button} elevation={4}>
        <TouchableOpacity style={styles.buttonTouchable} onPress={() => copyToClipboard()} >
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
  },
  copySymbol: {
    top: 5,
    right: 5,
    alignSelf: 'flex-end',
    height: 30,
  }
})