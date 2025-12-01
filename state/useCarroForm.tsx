import { useState } from "react"
import { carroVacio, Carro } from "../models/carro"

export const TOTAL_PASOS = 4;

export const useCarroForm = () => {

  const [carro, setCarro] = useState<Carro>(carroVacio);
  const [carros, setCarros] = useState<Carro[]>([]);
  const [paso, setPaso] = useState(0);

  const irAPaso = (destino: number) => setPaso(destino);

  const actualizarCampo = (campo: keyof Carro, valor: string) => {
    setCarro(anterior => ({
      ...anterior,
      [campo]: valor
    }))
  }

  const siguientePaso = () => irAPaso(paso + 1);

  const pasoAnterior = () => irAPaso(paso - 1);

  const registrarCarro = () => {
    setCarros(anterior => [...anterior, carro]);
    siguientePaso();
  }

  const reiniciarFormulario = () => {
    setCarro(carroVacio);
    setPaso(0);
  }

  return { carro, carros, paso, siguientePaso, pasoAnterior, actualizarCampo, reiniciarFormulario, registrarCarro };
}
