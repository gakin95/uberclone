import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    map:{
        height: Dimensions.get('window').height-400,
    },
    types:{
        height:400,
    }
})

export default styles