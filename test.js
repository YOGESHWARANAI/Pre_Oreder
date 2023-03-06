import React from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
class Test extends React.Component{
    render()
    {
        return(
            <View style={{marginLeft:30,marginTop:50}}>
                <Text onPress={()=>this.props.incre()}>component</Text>
            <Text>{this.props.n}</Text>
            </View>
        )
    }
}
const mapStateToProps = state=>({
        n:state.n
})
const mapDispatchToProps=dispatch=>({
    incre:()=>dispatch({type:'IN'})
})
export default connect(mapStateToProps,mapDispatchToProps)(Test);