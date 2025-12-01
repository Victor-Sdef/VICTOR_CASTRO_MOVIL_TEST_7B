import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Carro } from "../models/carro";
import { FormButton } from "../components/FromButton";

type ListaVehiculosProps = {
  carros: Carro[];
  alReiniciar: () => void;
}

export const ListaVehiculos = ({ carros, alReiniciar }: ListaVehiculosProps) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Vehículos registrados</Text>

      <View style={styles.tabla}>
        <View style={styles.filaEncabezado}>
          <Text style={styles.celdaEncabezado}>placa</Text>
          <Text style={styles.celdaEncabezado}>dueño</Text>
          <Text style={styles.celdaEncabezado}>marca</Text>
          <Text style={styles.celdaEncabezado}>modelo</Text>
        </View>

        <ScrollView>
          {carros.map((carro, indice) => (
            <View key={indice} style={styles.fila}>
              <Text style={styles.celda}>{carro.placa}</Text>
              <Text style={styles.celda}>{carro.nombreDelDueno}</Text>
              <Text style={styles.celda}>{carro.marca}</Text>
              <Text style={styles.celda}>{carro.modelo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <FormButton label="registrar otro" onPress={alReiniciar} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  tabla: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 16,
  },
  filaEncabezado: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff',
  },
  celdaEncabezado: {
    flex: 1,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  fila: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff',
  },
  celda: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
  },
})
