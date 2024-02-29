import { Text, View, StyleSheet, Platform, Image } from "react-native";

const getTypedetails = (type) => {
    switch(type) {
        case 'Fighter':
            return { borderColor: "#E33429", emoji: "⚔️" };
        case 'Healer':
            return { borderColor: "#29E32F", emoji: "🧚" };
        case 'Supporter':
            return { borderColor: "#E3B829", emoji: "✨" };
        default:
            return { borderColor: "#E61C18", emoji: "❓" };
    }
};



export default function BerserkCard(
    {
        name, 
        image, 
        type, 
        rate, 
        abstract
    }){    

            // Setting background color for card related to their rate
        let cardBackgroundColor;
if (rate === 10) {
    cardBackgroundColor = "#E0D44A";
} else if (7 <= rate && rate < 10) {
    cardBackgroundColor = "#69DB1D";
} else if (4 <= rate && rate < 7) {
    cardBackgroundColor = "#DB7040";
} else if (0 <= rate && rate < 4) {
    cardBackgroundColor = "#5EBDE6";
}


        const {borderColor , emoji} = getTypedetails(type);
    return (
        <View style={[styles.Card ,{backgroundColor : cardBackgroundColor } ]}>

            <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rate}>Rates: {rate}/10</Text>
            </View>

            <View>
                <Image 
                style={styles.image}
                source={image} 
                accessibilityLabel={'${name} berserk'}
                resizeMode="contain"/>
            </View>

            <View style={styles.typeContainer}>
                <View style={[styles.badge, {borderColor}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText}>{type}</Text>  
                 </View>
            </View>  
            
            <View style={styles.abstract}>
            <Text style={styles.abstract}>{abstract}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Card:{
        //backgroundColor:"#E0D44A",
        borderRadius:16,
        borderWidth: 2,
        padding: 16,
        margin: 16,

        ...Platform.select({
            ios: {
                // iOS specific styles
                shadowColor: '#333',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                // Android specific styles
                elevation: 5,
            },
        })
       
    },

    nameContainer:{
       
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 25,
        
    },
    name:{
         fontSize : 30,    
        fontWeight: "bold",
    },
    rate:{
        fontSize: 15,
        fontWeight:"bold",
    },

    image:{
        width: "100%",
        height: 200 ,
        marginBottom: 16,
    },

    abstractContainer:{
        fontSize : 24,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
    },

    typeText:{
        //color:"red",
        fontWeight: "bold",
        fontSize: 15,
    },

    abstract:{
        fontSize: 15,
         marginLeft:32,
         marginRight: 32,
         marginTop: 10,
         marginBottom: 10,
         fontWeight: "bold",
    },
    typeContainer:{
        alignItems : 'center',
        marginBottom : 40,
    },  
    badge:{
        flexDirection : "row",
        alignContent : "center",
        paddingVertical : 6,
        paddingHorizontal : 12,
        borderRadius : 20,
        borderWidth : 4,
    },

    typeEmoji:{
        fontSize : 30,
        marginRight:12,
    },
})




