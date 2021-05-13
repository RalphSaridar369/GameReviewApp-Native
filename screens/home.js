import React,{useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons} from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import Review from './review';

const Home= ({ navigation }) => {

    const addReview = (review) =>{
        review.key =   Math.random().toString();
        setReviews((prev)=>{
            return [ review, ...prev];
        });
        setModalOpen(false);
    }

    const [modalOpen,setModalOpen]=useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    return (     
        <ImageBackground source={require('../assets/bg_game.png')} style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                    <MaterialIcons name="close" size={24} onPress={()=>setModalOpen(false)} style={{ ...styles.modalToggle, ...styles.modalClose}}/>
                        <ReviewForm add={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name="add" size={24} onPress={()=>setModalOpen(true)} style={styles.modalToggle}/>
            <FlatList 
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate("Review",item)}>
                    <Card><Text style={globalStyles.titleText}>{item.title}</Text></Card>
                </TouchableOpacity>
            )} 
            />
        </ImageBackground>
    )
}

const styles=StyleSheet.create({
    modalContent:{
        flex:1,
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose:{
        marginTop:20,
        marginBottom:0,
    }
})


export default Home
