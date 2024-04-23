// // CustomMapModal.tsx
// import React, { useState } from 'react';
// import { View, Text, Modal, Button } from 'react-native';
// import MapView, { Marker, LatLng } from 'react-native-maps';

// interface CustomMapModalProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const CustomMapModal: React.FC<CustomMapModalProps> = ({ visible, onClose }) => {
//   const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);

//   const handleMapPress = (event: { nativeEvent: { coordinate: LatLng } }) => {
//     setSelectedLocation(event.nativeEvent.coordinate);
//   };

//   return (
//     <Modal animationType="slide" transparent={true} visible={visible}>
//       <View style={{ flex: 1 }}>
//         <MapView
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: 37.7749, // Set your initial latitude
//             longitude: -122.4194, // Set your initial longitude
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           onPress={handleMapPress}
//         >
//           {selectedLocation && <Marker coordinate={selectedLocation} />}
//         </MapView>
//         <Button title="Close" onPress={onClose} />
//       </View>
//     </Modal>
//   );
// };

// export default CustomMapModal;



// CustomModal.js
import React from 'react';
import { View, Text, Modal, Button } from 'react-native';
import BottomPopupComponent from './bottomPopupComponent';



interface CustomMapModalProps {
    visible: boolean;
    onClose: () => void;
    navigation:any;
   
  }

const CustomModal : React.FC<CustomMapModalProps> = ({ visible, onClose,navigation}) => {
  
  
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <Text>Hello! This is your custom pop-up modal.</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
      <BottomPopupComponent navigation={navigation}/>
    </Modal>
  );
};

export default CustomModal;

