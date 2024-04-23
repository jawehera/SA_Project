declare module 'react-native-grid-component' {
    import React from 'react';
    import { ViewStyle, StyleProp } from 'react-native';
  
    export interface GridViewProps<ItemT> {
      items: ItemT[];
      itemsPerRow: number;
      renderItem(item: ItemT): React.ReactElement;
      style?: StyleProp<ViewStyle>;
      // Add more props here if needed
    }
  
    export default function GridView<ItemT>(props: GridViewProps<ItemT>): React.ReactElement;
  }