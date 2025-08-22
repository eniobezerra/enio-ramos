import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text></Text>
      <View>
        <Text></Text>
        <Image source={require('@/assets/images/foto1.jpg')}
        style={{width: 200, height: 200, }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          
        }}
        defaultValue="ENIO RAMOS BEZERRA"
      />
    </ScrollView>
  );
};

export default App;