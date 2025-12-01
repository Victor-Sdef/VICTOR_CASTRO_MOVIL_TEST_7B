import { View, Text, StyleSheet, Alert } from "react-native";
import { Carro } from "../models/carro";
import { FormInput } from "../components/FormInput";
import { FormButton } from "../components/FromButton";

type Paso2Props = {
  carro: Carro;
  alCambiar: (campo: keyof Carro, valor: string) => void;
  alSiguiente: () => void;
  alAnterior: () => void;
}

export const Paso2Pantalla = ({ carro, alCambiar, alSiguiente, alAnterior }: Paso2Props) => {

  const manejarSiguiente = () => {
    if (carro.placa === '' || carro.nombreDelDueno === '' || carro.ano.toString() === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    alSiguiente();
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Detalles del vehículo</Text>
      <FormInput
        label="Placa"
        placeholder='ABC-1234'
        value={carro.placa}
        onChangeText={valor => alCambiar('placa', valor)}
      />
      <FormInput
        label="Nombre del dueño"
        placeholder='Patito Juan'
        value={carro.nombreDelDueno}
        onChangeText={valor => alCambiar('nombreDelDueno', valor)}
      />
      <FormInput
        label="Año"
        placeholder='2024'
        value={carro.ano.toString()}
        onChangeText={valor => alCambiar('ano', valor)}
        keyboardType="numeric"
      />
      <FormInput
        label="Tipo de gasolina"
        placeholder='Gasolina, Diesel, Electrico, Hibrido'
        value={carro.tipoDeGasolina}
        onChangeText={valor => alCambiar('tipoDeGasolina', valor)}
      />
      <View style={styles.botones}>
        <FormButton label="Regresar" onPress={alAnterior} style={styles.boton} />
        <FormButton label="Continuar" onPress={manejarSiguiente} style={styles.boton} />
      </View>
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
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  boton: {
    flex: 1,
    width: 'auto',
  }
})
