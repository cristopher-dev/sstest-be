## info

- clone el repositorio
- git clone url
- se esta utilizado dos ramas master y dev

## sql siga las instrucciones paso a paso

- base datos mysql version 5.6
- port: 3306, username: 'root', password: '1234567890',
- busque la carpeta sql y ejecute los script en orden 1,2,3 etc...

## docker mysql

- docker run -d -p 3306:3306 -v mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234567890 -d mysql:5.6

## server

- correr el servido npm start
- port del servidor 3000
- por efecto practico esta activado cors pero no se debe utilizar para production
- cors esta activo para que se puede hacer llamada de cualquier puerto en desarrollo
