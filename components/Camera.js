import React, {useContext} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CameraButton from './CameraButton';
import RNFS from 'react-native-fs';
import {Button} from 'react-native-elements';
import {AppContext} from './Context';
import TripCard from './TripCard';

const Camera = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const {cameraPage, activeTrip} = useContext(AppContext);

  const captureHandle = async () => {
    return Alert.alert(
      'Approve picture!',
      'Are you sure you want to add this picture?',
      [
        {
          text: 'Yes',
          onPress: async () => {
            try {
              const data = await takePicture();
              // console.log(data.uri);
              // console.log(activeTrip);

              const filePath = data.uri;
              const date = new Date().toDateString();
              const newFilePath =
                RNFS.ExternalDirectoryPath + '/' + activeTrip.trip_id + '.jpg';
              console.log(newFilePath);
              activeTrip.pictures.push('file://' + newFilePath);
              RNFS.moveFile(filePath, newFilePath)
                .then(() => {
                  console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
                })
                .catch(error => {
                  console.log(error);
                });
            } catch (error) {
              console.log(error);
            }
            await navigation.navigate(cameraPage);
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
        captureAudio={false}>
        <CameraButton
          title="Capture"
          color="#1eb900"
          onPressFunction={() => captureHandle()}
        />
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate(cameraPage);
          }}
        />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Camera;
