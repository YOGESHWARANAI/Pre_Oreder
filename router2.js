import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Router3 from "./router3";


class Router2 extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <SafeAreaProvider style={{}}>
        <View style={[Styles.container, { borderBottomColor: "blue" }]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("PaymentScreen")}>
          <Icon name="bars" size={20} color="black" />
          </TouchableOpacity>
          <Text style={[Styles.text, { marginLeft: 120 }]}>Menu</Text>

          <TouchableOpacity
            style={{ marginLeft: "auto" }}
            onPress={() => this.props.navigation.navigate("Cart")}
          >
            <Icon name="cart-plus" size={25} color="blue" marginLeft="auto" />
          </TouchableOpacity>
        </View>
        <Router3 />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    color: "blue",
    fontFamily: "sansSerif",
    fontSize: 17,
  },
});


export default Router2;