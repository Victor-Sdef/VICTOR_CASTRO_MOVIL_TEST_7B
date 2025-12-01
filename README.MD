# 📝 Enunciado de la Prueba de Interciclo  
## Sistema de Registro de Vehículos

Desarrolle una aplicación que permita **registrar vehículos** siguiendo un proceso guiado de **3 pasos**, basado en el prototipo proporcionado.

---

## ✅ Paso 1 – Datos del vehículo
El sistema debe mostrar el título:

**“Registro de un vehículo – Paso 1 de 3”**

Y solicitar los siguientes datos:

- Marca  
- Modelo  

El usuario podrá avanzar con el botón **“continuar”**.  
No se debe permitir avanzar si algún campo está vacío.

---

## ✅ Paso 2 – Detalles del vehículo
El sistema debe mostrar el título:

**“Registro de un vehículo – Paso 2 de 3”**

Y solicitar:

- Placa  
- Nombre del dueño  
- Año  
- Tipo de gasolina  

El usuario podrá:

- **regresar** al paso anterior  
- **continuar** al siguiente paso  

Debe validarse que **todos los campos estén completos**.

---

## ✅ Paso 3 – Resumen del registro
El sistema debe mostrar un resumen con:

- Marca  
- Modelo  
- Placa  
- Nombre del dueño  
- Año  
- Tipo de gasolina  

El usuario podrá:

- **regresar**  
- **registrar** el vehículo  

Al confirmar, los datos deben guardarse en una estructura de almacenamiento (lista, arreglo, base de datos, etc., según lo que indique el docente).

---

## ✅ Pantalla final – Vehículos registrados
Después de registrar, el sistema debe mostrar una tabla con las columnas:

placa | dueño | marca | modelo

Debajo deben listarse todos los vehículos registrados.

Debe existir un botón **“registrar otro”** que reinicie el proceso desde el Paso 1.

---

## 🎯 Requerimientos obligatorios

2. Persistencia temporal en memoria (lista, arreglo).  
3. Navegación correcta entre pasos (avanzar y regresar).  
4. Despliegue correcto del resumen antes de registrar.  
5. Mostrar el listado de todos los vehículos registrados.
6. Crear un repositorio en github publico con el siguiente nombre APELLIDO_MOVIL_TEST_7B