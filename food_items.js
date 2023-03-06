import Food_Item_Template from "./food_item_template";
import React, { Component } from 'react';
import { Text, View, Button,TouchableOpacity,Image,StyleSheet,ScrollView } from 'react-native';


export const Most_popular=()=>{
  return(
    <View>
    <ScrollView>
    <Food_Item_Template food_name={"Chicken Biriyani "} price={170} quantity={0} src={'https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52248.jpg?w=1380'}/>
    <Food_Item_Template food_name={"Chilli Parotta  "} price={15} quantity={0} src={'https://img.freepik.com/free-photo/portion-african-chapati-bean-stew-garlic-lemons_181624-57135.jpg?w=1060&t=st=1673880728~exp=1673881328~hmac=145c790b74d39e34f86a6474505b31cfff17589340df0905355f1b07d0f7cc0e'}/>
    <Food_Item_Template food_name={"Grill Chicken    "} price={250} quantity={0} src={'https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?w=1380&t=st=1673881064~exp=1673881664~hmac=33c1ccf0638ba335bb0dd0aeebc485dfb9bee2d7f91361d91c1eb15933757590'}/>
    <Food_Item_Template food_name={"Shawarma         "} price={50} quantity={0} src={'https://img.freepik.com/free-vector/hand-drawn-shawarma-logo-template_23-2149540546.jpg?w=826&t=st=1673881271~exp=1673881871~hmac=1020322787ed74cebf25dde116a3aea438193e05747b9ed89966936aa9a69d05'}/>
    <Food_Item_Template food_name={"Strabery Ice cream"} price={90} quantity={0} src={'https://img.freepik.com/free-photo/ice-cream_144627-19532.jpg?w=740&t=st=1673882385~exp=1673882985~hmac=a5fad1419d619137bf1977b8f8b7e002134a177343d39ab394101ddc50bc731c'}/>
    <Food_Item_Template food_name={"Chicken Noodles  "} price={170} quantity={0} src={'https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74559.jpg?w=1380&t=st=1673881550~exp=1673882150~hmac=080aadf5c500ce31e25cf557a9b7e17a555f0d5a1b8ebd056a3db690078fa31d'}/>
    <Food_Item_Template food_name={"Lemon Juice      "} price={30} quantity={0} src={'https://img.freepik.com/free-photo/glasses-with-lemonade-table_23-2148482456.jpg?w=826&t=st=1673882556~exp=1673883156~hmac=e2585e088c647e94d06958b232371340c1be4df035f376e98a65f1766f98f1a4'}/>
    <Food_Item_Template food_name={"Fish Fry         "} price={100} quantity={0} src={'https://img.freepik.com/free-photo/grilled-salmon-with-salad_2829-19751.jpg?w=826&t=st=1673882721~exp=1673883321~hmac=be83b23b1145c119c9ed8e9f3a588de9723a79dc88394428ae34d986fea6f79e'}/>
    </ScrollView>
    </View>
  )
  }

export const Chicken=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }

  export const Fish=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }
  export const Mutton=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }
  export const Fast_Food=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }
  export const Combo=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }
  export const Juice=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }
  export const Ice=()=> {
    return (
      <View>
            <ScrollView>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={170} quantity={0} src={''}/>
            <Food_Item_Template food_name={"Mutton_Biriyani"} price={80} quantity={0} src={''}/>
            </ScrollView>
        </View>
    );
  }