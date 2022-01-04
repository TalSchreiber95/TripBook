import {View, Text, StyleSheet, ImageBackground, Alert} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Button, CheckBox} from 'react-native-elements';
import {Form, FormItem} from 'react-native-form-component';
import {AppContext} from './Context';
import CameraButton from './CameraButton';


const RightCardFooter = ({
  trip,
  toggler,
  updateButton,
  cameraPage,
  navigation,
}) => {
  const [pic, setPic] = useState();
  const {isGuest, isUserConnected, setCameraPage, setActiveTrip} = useContext(AppContext);

  const ToggleGallery = () => {
    toggler === 'gallery' ? updateButton('none') : updateButton('gallery');
  };

  const onAddPicture = () => {
    // Note: should be improved!
    if (pic !== '') {
      if (
        trip.pictures[0] ===
        'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
      ) {
        trip.pictures[0] = pic;
        Alert.alert('new picture');
      } else {
        trip.pictures.push(pic);
        Alert.alert('push picture');
      }
    }
  };

  return (
    <View style={styles.container}>
      {(!isGuest || isUserConnected) && (
        <View>
          <Button
            title="Add Picture +"
            onPress={ToggleGallery}
            type="secondary"
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            raised
          />
          {toggler === 'gallery' && (
            <View style={styles.popUp}>
              <Form
                onButtonPress={onAddPicture}
                buttonStyle={styles.formButton}
                buttonText="Add">
                <FormItem
                  placeholder="Add url pic here"
                  style={styles.inputView}
                  label="Url pic:"
                  labelStyle={styles.label}
                  multiline={true}
                  value={pic}
                  onChangeText={pic => {
                    setPic(pic);
                  }}
                  isRequired
                />
              </Form>
              <Button
                title="Take picture"
                raised
                type='clear'
                onPress={() => {
                  navigation.navigate('Camera');
                  setCameraPage(cameraPage);
                  setActiveTrip(trip);
                }}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
};
RightCardFooter.defaultProps = {
  title: 'TripBook',
  name: {
    firstName: '',
    lastName: '',
  },
};

const styles = StyleSheet.create({
  container: {
    // bottom: 20,
    flex: 1,
    alignItems: 'flex-end',
  },
  formButton: {
    backgroundColor: 'steelblue',
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 25,
    marginTop: 0,
    borderRadius: 20,
  },
  //   formButton: {
  //     backgroundColor: 'steelblue',
  //     marginLeft: 100,
  //     marginRight: 100,
  //     marginTop: 0,
  //     borderRadius: 20,
  //     color: 'black',
  //     // height: 40,
  //   },
  inputView: {
    flex: 0.3,
    // backgroundColor: '#F5F5F5',
    borderBottomWidth: 0.5,
    // marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
    borderRadius: 5,
  },
  label: {
    color: 'black',
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  popUp: {
    // flex: 0.1,
    marginTop: 10,
    height: 'auto',
    width: 350,
    borderRadius: 5,
    position: 'relative',
    // top: 65,
    // left: 10,
    elevation: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonTitle: {
    // backgroundColor: 'black',
    // color:'black',
  },

  addPictureButton: {
    // backgroundColor: 'black',
    color: 'white',
  },

  titleArrowButtons: {
    // color: 'black',
  },
  buttonContainer: {
    // width: '120%',
    alignSelf: 'flex-end',
  },
  RLbuttons: {
    width: 40,
    height: 40,
    // margin: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 35,
    borderColor: 'black',
    borderWidth: 0.8,
  },

  RLbuttonsView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },

  text: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 2,
    margin: 15,
    marginTop: -3,
    textAlign: 'center',
  },
});
export default RightCardFooter;
