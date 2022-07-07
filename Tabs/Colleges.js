import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';

export default function Colleges() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.titleTexttwo}>
      Here are my top colleges that I would like to go to
     </Text>
      <FlatList 
      data = {[
        { key: "USC"},
        { key: "UCLA"},
        {key: "ELAC" },
      ]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
     />
      {/* <StatusBar style="auto" /> */}
      <Image style={styles.Profileimage} source={require('../assets/uscdusk.jpeg')}/>
      <Image style={styles.Profileimage} source={require('../assets/RoyceHall.jpeg')}/>
      <Image style={styles.Profileimage} source={require('../assets/elacbld.jpeg')}/>
      </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTexttwo: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: '#f7d0f5',
   },
   Liststyles: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#f7d0f5',
   },
   Profileimage: {
    width: "100%",
    height: 500,
    justifyContent: "space-around",
    resizeMode: "contain",
  },
   scrollView: {
    marginHorizontal: 0,
    backgroundColor: '#fff',
  },
});