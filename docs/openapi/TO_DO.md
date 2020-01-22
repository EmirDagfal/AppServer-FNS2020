# Tareas a realizar
## Pendientes
1. Estructuracion de las rutas faltantes
2. Definicion de los cantroladores
3. Estructuracion final de los esquemas de la base de datos

## Para una futura version (1.1.0)
1. Cambio de estructura del recurso 'Zone':
   - Agregar campo 'devices'. Este campo se autogeneraria al definir el campo 'geofence' de la zona.
     - Ventajas:
       - Se ahorra logica a la hora de realizar una transmision a los dispositivos de una zona (se evita la busqueda de dispositivos sobre dicha zona)
     - Desventajas:
       - Se debe ejecutar la busqueda de dispositivos cada vez que se modifique o cree el campo 'geofence' de la zona, y cuando se agrege o cambie la localizacion de cualquier dispositivo