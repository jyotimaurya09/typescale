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

    const newText = webCss;
    return newText
  }

  const renderCodeReactNativeCss = () => {
    const newText = reactFile;
    return newText
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
            :          "Something went wrong"
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