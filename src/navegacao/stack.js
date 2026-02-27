import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaExemplos from '../exemplos/listaExemplos';
import Exemplo01 from '../exemplos/ex01';
import Exemplo02 from '../exemplos/ex02';
import Exemplo03 from '../exemplos/ex03';
import Exemplo04 from '../exemplos/ex04';
import Exemplo05 from '../exemplos/ex05';
import Exemplo06 from '../exemplos/ex06';
import Exemplo07 from '../exemplos/ex07';
import Exemplo08 from '../exemplos/ex08';
import Exemplo09 from '../exemplos/ex09';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#777'},         
        // headerShown: false,
      }}                  
    >
      <Stack.Screen name="Home" component={ListaExemplos} options={{headerTintColor: '#fff',}} />
      <Stack.Screen
        name="Exemplo01"
        component={Exemplo01}
        options={{ title: 'Exemplo 1' }}               
      />
      <Stack.Screen name="Exemplo02" component={Exemplo02} />
      <Stack.Screen name="Exemplo03" component={Exemplo03} />
      <Stack.Screen name="Exemplo04" component={Exemplo04} />
      <Stack.Screen name="Exemplo05" component={Exemplo05} />
      <Stack.Screen name="Exemplo06" component={Exemplo06} />
      <Stack.Screen name="Exemplo07" component={Exemplo07} />
      <Stack.Screen name="Exemplo08" component={Exemplo08} />
      <Stack.Screen name="Exemplo09" component={Exemplo09} />
    </Stack.Navigator>
  );
}

export default RootStack;