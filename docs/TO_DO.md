# Tareas a realizar

## Pendientes
### 20 al 24 de enero
[x] Estructuracion de las rutas faltantes
[x] Definicion de los controladores
[x] Estructuracion de los esquemas de la base de datos
[x] Definicion de los modelos de la BD
[x] Prueba basica almacenamiento en BD
### 27 al 31 de enero
[ ] Completar documentacion openapi
[ ] Rectificar BD segun documentacion
[ ] Completar documentacion BD (diagrama de BD)

## Para una futura version (1.1.0)
1. Cambio de estructura del recurso 'Zone':
   - Agregar campo 'devices'. Este campo se autogeneraria al definir el campo 'geofence' de la zona.
     - Ventajas:
       - Se ahorra logica a la hora de realizar una transmision a los dispositivos de una zona (se evita la busqueda de dispositivos sobre dicha zona)
     - Desventajas:
       - Se debe ejecutar la busqueda de dispositivos cada vez que se modifique o cree el campo 'geofence' de la zona, y cuando se agrege o cambie la localizacion de cualquier dispositivo