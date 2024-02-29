import { StyleSheet, SafeAreaView, Platform, ScrollView, Linking, Text  } from "react-native";
import BerserkCard from './components/BerserkCard';

export default function App() {

  const Guts = {
    name: "Guts" ,
    image: require("./assets/guts.jpg"),
        type: "Fighter",
     rate: 10,
     abstract:"Guts, renowned as the (black swordman), is a former mercenary and branded wanderer who travels the world in a constant internal struggle between pursuing his own ends and upholding his attachments to those dear to him."
  };

  const Griffith = {
    name: "Griffith" ,
    image: require("./assets/Griffith.jpg"),
        type: "Fighter",
     rate: 9,
     abstract:"Griffith is the current leader of the reborn Band of the Falcon and supreme commander of the Midland Regular Army. Having been at the fore of many battles, he has amassed a reputation as a savior across the continent, and is revered as the (Falcon of Light)."
  };

  const Schierke = {
    name: "Schierke" ,
    image: require("./assets/Schierke.jpg"),
        type: "Supporter",
     rate: 7,
     abstract:"Schierke is mature for her age, quiet, and withdrawn. As a disciple, she was very respectful toward her mistress and was deeply saddened upon her demise. Presently, she gets along well with most of Guts' party, as well as with total strangers such as Sonia and Isma. "
  };

  const Caska = {
    name: "Caska" ,
    image: require("./assets/Caska.jpg"),
        type: "unknown",
     rate: 3.5,
     abstract:"Casca is a former unit commander of the Band of the Falcon and an estranged companion of Guts."
  };

  const Farnese = {
    name: "Farnese" ,
    image: require("./assets/Farnese.jpg"),
        type: "Healer",
     rate: 5,
     abstract:"Farnese de Vandimion is a noblewoman from the Vandimion family who led the Holy See's ceremonial guard, the Holy Iron Chain Knights. She later becomes a member of Guts' traveling party and learns the art of magic under Schierke's mentorship."
  };


  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
        <BerserkCard  {...Guts}/>
        <BerserkCard  {...Griffith}/>
        <BerserkCard  {...Schierke}/>
        <BerserkCard  {...Farnese}/>
        <BerserkCard  {...Caska}/>
      
      {/* Citing */}
        <Text style={{fontWeight : "bold" , fontSize : 20}}>
  Source: 
  <Text 
    style={{color: 'blue', textDecorationLine: 'underline'}}
    onPress={() => Linking.openURL('https://berserk.fandom.com/wiki')}
  >
    {' '}https://berserk.fandom.com/wiki
  </Text>
</Text>

     </ScrollView>
     </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop : Platform.OS === 'android'? 25 : 0,
  },
});
