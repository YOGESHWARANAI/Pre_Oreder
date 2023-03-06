import React from "react";
import { Text, View,Image, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView,SafeAreaView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";


class Cart extends React.Component{
    constructor(props)
    {
        super(props);
    }
    numberList = this.props.counter.map((num) => parseInt(num));
     sum = this.numberList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      state=({
        sum_value:this.sum
      })
   
      Ans=()=>{
        fetch("http://10.0.2.2:3000/model",{
                method:"post",
                   headers:{
                    'Content-Type':'application/json'
                     },
                    body:JSON.stringify({
                     name:this.props.lists
               })
           })
       .then(res=>res.json())
       .then(()=>{console.log(this.props.food_name)})
       }
       Delete=(n)=>{
        // this.props.decre(this.props.keys),
       this.props.decre(n)
    }

    
    render(){
    return (
        <SafeAreaProvider>
            <View style={{width:400,height:70,justifyContent:"center",alignContent:"center",backgroundColor:"grey"}}>
                <Text style={{marginLeft:60, color:"white",fontSize:30}}>Total Amount : {this.props.n} </Text>
            </View>
        <ScrollView>
        {this.props.lists.map((item, index) => ( 
           < View style={[Styles.container,{marginTop:1}]}>            
           <View style={{marginRight:"auto"}}>
           <Image source={{uri:item[3]}} style={[Styles.cat]}/>
           </View>
           <View style={{marginRight:"auto"}}>
           <Text style={[Styles.text,{fontWeight:"bold"}]}>{item[0]}</Text>
           <Text style={[Styles.text,{paddingBottom:3}]}>Quantity : {item[1]}</Text>
           <Text style={[Styles.text]}>Total Price :  {item[2] * item[1]}</Text>
           </View>
        <TouchableOpacity onPress={()=>this.Delete(item[2]*item[1])}>
        <Icons name="delete" size={22} color="red" paddingRight={24} marginLeft="auto"/>
        </TouchableOpacity>
        </View>
        ))}          
        </ScrollView>
        <View>
        <Text>{this.props.n}</Text>
        <TouchableOpacity>
            <Text>Place the order</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaProvider>
    );
}
}


const Styles = StyleSheet.create({
    view:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        flexDirection:"column",
    },
    container:{
        borderWidth:0.5,
        borderColor:"grey",
        height:100,
        flexDirection:"row",
       justifyContent:"center",
       alignItems:"center"
    },
    cat:{
        borderRadius:30,
        backgroundColor:"grey",
        width:70,
        height:70,
        margin:10,
        
    },
    text:{
        color:"black",
    },
    footer:{
        backgroundColor:"grey",
        padding:50,
        height:100,
        width:50
    },
    button:{
        marginTop:2,
        width:20,
        borderWidth:1,
        borderColor:"black",
        justifyContent:"center",
        alignItems:"center"
        
    }
})
const mapStateToProps=state=>({
   
      counter : state.count,
      lists:state.list,
      n:state.sum
    
})
const mapDispatchToProps=dispatch=>({
    decre:(key)=>dispatch({
        type:'DE',
        payload:key}),

    del:(amnt)=>dispatch({
        type:'AMNT',
        payload : amnt
    })
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);