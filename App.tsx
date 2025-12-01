import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { useCarroForm } from "./state/useCarroForm";
import { Paso1Pantalla } from "./screens/Paso1Pantalla";
import { Paso2Pantalla } from "./screens/Paso2Pantalla";
import { Paso3Pantalla } from "./screens/Paso3Pantalla";
import { ListaVehiculos } from "./screens/ListaVehiculos";

export default function App() {

  const { carro, carros, actualizarCampo, paso, siguientePaso, pasoAnterior, reiniciarFormulario, registrarCarro } = useCarroForm()

  const renderizarPantalla = () => {
    if (paso === 0) {
      return <Paso1Pantalla carro={carro} alCambiar={actualizarCampo} alSiguiente={siguientePaso} />
    }
    if (paso === 1) {
      return <Paso2Pantalla carro={carro} alCambiar={actualizarCampo} alSiguiente={siguientePaso} alAnterior={pasoAnterior} />
    }
    if (paso === 2) {
      return <Paso3Pantalla carro={carro} alAnterior={pasoAnterior} alRegistrar={registrarCarro} />
    }
    return <ListaVehiculos carros={carros} alReiniciar={reiniciarFormulario} />
  }

  const obtenerTitulo = () => {
    if (paso === 3) {
      return "Registro de un vehículo";
    }
    return "Registro de un vehículo";
  }

  return (
    <SafeAreaView style={styles.areaSegura}>
      <View style={styles.areaSegura}>
        <StatusBar style="auto" />
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>{obtenerTitulo()}</Text>
          {paso < 3 && (
            <Text style={styles.pasos}>
              Paso {paso + 1} de 3
            </Text>
          )}
          <View style={styles.tarjeta}>{renderizarPantalla()}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#f3f4ff6",
    //marginTop: 30, //primera solucion para el espacio superior
  },
  contenedor: {
    flex: 1,
    padding: 24,
    gap: 12, //estilo que permite agregar espacios
  },
  titulo: {
    fontSize: 24,
    fontWeight: 700,
    color: "#1e293b",
  },
  pasos: {
    fontSize: 14,
    color: "#4b5566",
  },
  tarjeta: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
});
