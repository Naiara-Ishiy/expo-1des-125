import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            backgroundColor: '#ff0', 
            alignItems: 'center', 
            // justifyContent: 'space-evenly',             
        }, 
        titulo: {
            fontSize: RFPercentage(5), 
            fontWeight: 'bold', 
            color: '#777', 
        }, 
        txt: {
            fontSize: RFPercentage(2.5), 
        }, 
        botao: {
            backgroundColor: '#f00',
            borderRadius: 10, 
            marginTop: 10

        },
        textoBtn: {
            padding: RFPercentage(0.8),             
        },
        btnVoltar: {
            // borderWidth: 1,
            width: '100%',
            paddingLeft: RFPercentage(1), 
            alignItems: 'flex-start'
        },
        exemplo: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
);  

export default styles;