export type Carro = {
  marca: string;
  modelo: string;
  placa: string;
  nombreDelDueno: string;
  ano: number;
  tipoDeGasolina: "Gasolina" | "Diesel" | "Electrico" | "Hibrido";
};

export const carroVacio: Carro = {
  marca: "",
  modelo: "",
  placa: "",
  nombreDelDueno: "",
  ano: new Date().getFullYear(),
  tipoDeGasolina: "Gasolina",
};
