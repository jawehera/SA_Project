// import React, { useState } from 'react';
//   import { StyleSheet } from 'react-native';
//   import { SelectCountry } from 'react-native-element-dropdown';

//   const local_data = [
//     {
//       value: '1',
//       lable: 'Country 1',
      
//     },
//     {
//       value: '2',
//       lable: 'Country 2',
     
//     },
//     {
//       value: '3',
//       lable: 'Country 3',
      
//     },
    
    
//   ];

//   const SelectCountryScreen = (_props: any) => {
//     const [country, setCountry] = useState('1');

//     return (
//       <SelectCountry
//         style={styles.dropdown}
//         selectedTextStyle={styles.selectedTextStyle}
//         placeholderStyle={styles.placeholderStyle}
//         imageStyle={styles.imageStyle}
//         iconStyle={styles.iconStyle}
//         maxHeight={200}
//         value={country}
//         data={local_data}
//         valueField="value"
//         labelField="lable"
//         imageField=""
//         placeholder="Select country"
//         searchPlaceholder="Search..."
//         onChange={e => {
//           setCountry(e.value);
//         }}
//       />
//     );
//   };

//   export default SelectCountryScreen;

//   const styles = StyleSheet.create({
//     dropdown: {
//       margin: 16,
//       height: 50,
//       width: 150,
//       backgroundColor: '#EEEEEE',
//       borderRadius: 22,
//       paddingHorizontal: 8,
//     },
//     imageStyle: {
//       width: 24,
//       height: 24,
//       borderRadius: 12,
//     },
//     placeholderStyle: {
//       fontSize: 16,
//     },
//     selectedTextStyle: {
//       fontSize: 16,
//       marginLeft: 8,
//     },
//     iconStyle: {
//       width: 20,
//       height: 20,
//     },
//   });




import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextStyle, ViewStyle } from 'react-native';

interface Item {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  data: Item[];
  onSelectItem: (item: Item) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ data, onSelectItem }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsDropdownOpen(!isDropdownOpen)} style={styles.dropdownToggle}>
        <Text>Type of problem</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdownList}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                setIsDropdownOpen(false);
                onSelectItem(item);
              }} style={styles.dropdownItem}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.value}
          />
        </View>
      )}
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  dropdownToggle: ViewStyle;
  dropdownList: ViewStyle;
  dropdownItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    position: 'relative',
  },
  dropdownToggle: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 4,
    marginTop: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
});

export default CustomDropdown;
