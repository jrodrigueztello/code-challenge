# code-challenge
- Author: Jonnathan Andres Rodriguez Tello

- Descripción: Este desarrollo es un API de facturaciones con descuentos, dependiendo de 
    - tipo de usuario (CLIENTE, AFILIADO, EMPLEADO)
    - años de ser cliente
    - descuentos por cada 100 dolares

# Repositorio

https://github.com/jrodrigueztello/code-challenge.git

# Tecnologias utilizadas 

- Node@16.10.0
- Secualize
- Express
- joi
- jest
- Postgres
- Eslint
- Prettier

# Requisitos para iniciar el API


### Clone project

1. `git clone https://github.com/jrodrigueztello/code-challenge.git`
2. `cd ceb-provider/automation-task-worker`
3. `npm i`


### correr el Backup en base de datos
Se tiene un backup de las tablas que se crearon para la ejecucion de esta prueba. En nuestro caso usamos 
Postgres
el backup se encuentra en la siguiente ruta 

`code-challenge/sql/backup.sql`


### Agregar variables de entorno
crear el archivo .env dentro de la carpeta `api`


### Environment variables

```ruby

PORT=4001
SERVER_TIMEOUT=30000

#POSTGRES_CONECTION
POSTGRES_USER=postgres
POSTGRES_PORT=5432
POSTGRES_DATABASE="postgres"
POSTGRES_HOST=localhost
POSTGRES_PASSWORD="123456"

```

### Iniciar el API

1. cd api
2. npm run start

### Funcionamiento de los endpoint.

#### Usuarios.




