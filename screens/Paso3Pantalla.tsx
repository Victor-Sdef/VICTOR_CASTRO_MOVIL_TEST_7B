import { View, Text, StyleSheet } from "react-native";
import { Carro } from "../models/carro";
import { FormButton } from "../components/FromButton";

type Paso3Props = {
  carro: Carro;
  alAnterior: () => void;
  alRegistrar: () => void;
}

export const Paso3Pantalla = ({ carro, alAnterior, alRegistrar }: Paso3Props) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Resumen del registro</Text>
      <View style={styles.tarjeta}>
        <Text style={styles.fila}>Marca: {carro.marca}</Text>
        <Text style={styles.fila}>Modelo: {carro.modelo}</Text>
        <Text style={styles.fila}>Placa: {carro.placa}</Text>
        <Text style={styles.fila}>Dueño: {carro.nombreDelDueno}</Text>
        <Text style={styles.fila}>Año: {carro.ano}</Text>
        <Text style={styles.fila}>Tipo de gasolina: {carro.tipoDeGasolina}</Text>
      </View>
      <View style={styles.botones}>
        <FormButton label="Regresar" onPress={alAnterior} style={styles.boton} />
        <FormButton label="Registrar" onPress={alRegistrar} style={styles.boton} />
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
  tarjeta: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    backgroundColor: 'white',
  },
  fila: {
    fontSize: 16,
    marginBottom: 8,
    color: '#111827',
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
