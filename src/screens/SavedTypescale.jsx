import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DropdownExample from '../components/Pickeritem';
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { removeSavedTypescale } from '../redux/slices/SavedTypescale';

const SavedTypescale = () => {
  const typescale = useSelector((state) => state.saved);
  const [typescaleItems, setTypescaleItems] = useState(typescale.data || []);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    setTypescaleItems(typescale.data || []);
  }, [typescale.data]);

  const renderTypescaleItem = ({ item }) => (
    <Surface style={styles.outerContainer} elevation={0}>
      <TouchableOpacity style={styles.typescaleItemContainer}>
        <Text style={styles.bodyFont}>Body Font: {item.bodyFont}</Text>
        <Text style={styles.bodyLetterSpacing}>Body Letter spacing: {item.bodyLetterSpacing}</Text>
        <Text style={styles.bodyLineHeight}>Body Line Height: {item.bodyLineHeight}</Text>
        <Text style={styles.bodySize}>Body Size: {item.bodySize}</Text>
        <Text style={styles.bodyWeight}>Body Weight: {item.bodyWeight}</Text>
        <Text style={styles.headingFont}>Heading Font: {item.headingFont}</Text>
        <Text style={styles.headingLetterSpacing}>Heading Letter spacing: {item.headingLetterSpacing}</Text>
        <Text style={styles.headingLineHeight}>Heading Line Height: {item.headingLineHeight}</Text>
        <Text style={styles.headingWeight}>Heading Weight: {item.headingWeight}</Text>
        <Text style={styles.scale}>Scale: {item.scale}</Text>
      </TouchableOpacity>
      <Surface elevation={0}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="eye" size={32} color={'black'} />
         
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {
          dispatch(removeSavedTypescale(item));
        }}>
          <Icon name="delete" size={32} color={'red'} />
          
        </TouchableOpacity>
      </Surface>
    </Surface>
  );

  return (
    <>
      <FlatList
        data={typescaleItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTypescaleItem}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.flatListContainer}
      />
    </>
  );
};

export default SavedTypescale;

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 10, // Adjust the padding as needed
  },
  typescaleItemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
  },
  bodyFont: {
    // Define styles for bodyFont property
  },
  bodyLetterSpacing: {
    // Define styles for bodyLetterSpacing property
  },
  outerContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  iconContainer: {
    padding: 5,
    marginRight: 5
  }
});
