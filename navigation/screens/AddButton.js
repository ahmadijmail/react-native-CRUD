import React from 'react';

import Ddialog from './dialog';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const AddButton = ({ navigation, item }) => {
  const clickHandler = () => {
    //function to handle click on floating Action Button
navigation.navigate("addProcudt")

   //alert('Floating Button Clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      {/* <Ddialog/> */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://cdn-icons-png.flaticon.com/512/148/148764.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    //backgroundColor: 'white',
  //  padding: 10,
   // height:'100%'
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    //backgroundColor:'black'
  },
});
