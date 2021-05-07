import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-between'
    },
    map:{
        height: Dimensions.get('window').height-450,
    },
    types:{
        height:400,
    }
})

export default styles