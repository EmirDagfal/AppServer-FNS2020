# Desplegar una api en Heroku
Despliegue de api express-mongodb en Heroku

1. ## Configuracion de variables de entorno de la api:
Dentro del codigo fuente configurar las siguientes variables de entorno en un archino '.env'
~~~ zsh
SERVER_URL = http://localhost
PORT = 3000
MONGODB_URI = mongodb://localhost:27017/db-name
~~~
2. ## Crear una aplicacion en heroku
3. ## Agregar mongodb a la aplicacion
Dentro de la seccion *'Resuorces'* agregar el Add-on *'mLab'*
4. ## Configuracion de variables de entotno de la aplicacion de heroku
Dentro de la seccion *'Settings'* agregar las siguentes Variables de entorno:
~~~ zsh
MONGODB_URI = mongodb://<dbuser>:<dbpassword>@ds061681.mlab.com:61681/heroku_hczxlbzc
PORT = 3000
~~~
> MONGODB_URI se genera automaticamente al agregar mLab a la aplicacion
> En la api usamos el puerto 3000 por defecto
5. ## Subir api
### Dentro del directorio de nuestra api ejecutamos los siguientes comandos desde cualquier consola:
Hacer un commit
~~~ zsh
git add .
git commit -m "Texto del commit"
~~~
Agragar aplicacion de heroku a nuestro repositorio
~~~ zsh
git remote add heroku https://git.heroku.com/<nombre-de-la-api>.git
~~~
Subir la api y ver logs
~~~ zsh
heroku login
git push heroku master
heroku logs --tail
~~~
6. ## Acceder a la api alojada en heroku
https://<nombre-de-la-api>.herokuapp.com/