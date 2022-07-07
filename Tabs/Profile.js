import { StyleSheet, Text, View, Image, ScrollView,} from 'react-native';

export default function Profile() {
  return (
    <View>
       <ScrollView style={styles.scrollView}>
 <Text style={styles.titleText}>
Bryan Valiente
</Text>
      {/* <StatusBar style="auto" /> */}
      <Image style={styles.Profileimage}  source={require('../assets/Beach.jpeg')}/>
     <Text>
      I am a rising junior who goes to synergy quantum academy. Currently I think I am in a rough spot because SCLA is hard and I am struggling. I hope it will help me be more knowledgable and grow as a professional. But hopefully this program will be worth it, here's hoping.
     </Text>
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
    alignItems: "center",
    
  },
Profileimage: {
  width: "100%",
  height: 500,
  justifyContent: "space-around",
  resizeMode: "contain",
},
titleText: {
  fontSize: 45,
  textAlign: 'center',
  backgroundColor: '#36cdff',
},
scrollView: {
  // marginHorizontal: 20,
  backgroundColor: '#fff',
},
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
});