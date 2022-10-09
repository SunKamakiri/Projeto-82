import React, {Component} from "react";
import { Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCards extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.cardContainer}>
                    <View styles = {styles.authorImageContainer}>
                        <Image
                            source = {require("../assets/profile_img.png")}
                            style = {styles.profileImage}
                        ></Image>
                    </View>
                    <View style = {styles.authorNameContainer}>
                        <Text style = {styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
               <Image source = {require("../assets/post.jpeg")} style = {styles.postImage}></Image>
               <View style = {styles.captionContainer}>
                    <Text style = {styles.captionText}>{this.props.post.caption}</Text>
               </View>
               <View style = {styles.actionContainer}>
                    <View style = {style.likeButton}>
                        <Ionicons name = {"heart"} size = {RFValue(30)} color = {"white"}/>
                        <Text style = {styles.likeText}>40K</Text>
                    </View>
               </View>
            </View>
        )
    }
}