import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ListaExemplos() {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplos</Text>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Exemplo01')} 
            >
                <Text style={styles.textoBtn}>Exemplo 1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Exemplo02')}
            >
                <Text style={styles.textoBtn}>Exemplo 2</Text>
            </TouchableOpacity>
        </View>

    );
}
