import React, {Component} from "react";
import { Text, View, Platform, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";
import PostCards from "./PostCards";

let posts = require("./TempStories.json")

export default class Feed extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    renderItem = ({item: posts}) =>{
        return <PostCards posts = {posts}/>
    }
    keyExtractor = (item,index) =>{
        index.toString()
    }
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <View style = {styles.appTitle}>
                    <View style = {styles.appIcon}>
                        <Image
                            source = {require("../assets/logo.png")}
                            style = {styles.iconImage}
                        ></Image>
                    </View>
                    <View style = {styles.appTitleTextContainer}>
                        <Text style = {styles.appTitleText}>Espectagrama</Text>
                    </View>
                </View>
                <View style = {styles.cardContainer}>
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {posts}
                        renderItem = {this.renderItem.PostCards}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle:{
        flex: 0.7,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
})