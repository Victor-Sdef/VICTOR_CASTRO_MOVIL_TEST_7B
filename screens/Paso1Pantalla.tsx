import { Text, View, StyleSheet, Alert } from "react-native"
import { FormInput } from "../components/FormInput"
import { Carro } from "../models/carro"
import { FormButton } from "../components/FromButton";

type Paso1Props = {
  carro: Carro,
  alCambiar: (campo: keyof Carro, valor: string) => void;
  alSiguiente: () => void
}

export const Paso1Pantalla = ({ carro, alCambiar, alSiguiente }: Paso1Props) => {

  const manejarSiguiente = () => {
    if (carro.marca === '' || carro.modelo === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    alSiguiente();
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Datos del vehículo</Text>
      <FormInput
        label="Marca"
        placeholder="Ingresa la marca"
        value={carro.marca}
        onChangeText={valor => alCambiar('marca', valor)}
      />
      <FormInput
        label="Modelo"
        placeholder="Ingresa el modelo"
        value={carro.modelo}
        onChangeText={valor => alCambiar('modelo', valor)}
      />
      <FormButton label="Continuar" onPress={manejarSiguiente} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
})
