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
2. `cd code-challenge/api`
3. `npm i`


### correr el Backup en base de datos
Se tiene un backup de las tablas que se crearon para la ejecucion de esta prueba. En nuestro caso usamos 
Postgres
el backup se encuentra en la siguiente ruta 

`code-challenge/sql/backup.sql`


### Agregar variables de entorno
crear el archivo .env dentro de la carpeta `api`


### Environment variables
agregar las credenciales necesarias para la conexion a Postgres
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
listar usuarios
1. GET `/users` lista los usuarios de base de datos 
resultado ejemplo
```json
[
    {
        "id": 1,
        "usuario": "jrodriguez",
        "nombre_completo": "Jonnathan Rodriguez",
        "tipo": "CLIENTE",
        "fecha_registro": "2018-05-21"
    },
    {
        "id": 2,
        "usuario": "ocastro",
        "nombre_completo": "Oscar Castro",
        "tipo": "CLIENTE",
        "fecha_registro": "2020-06-01"
    }
]

```

2. POST `/users` crea un nuevo usuario
- Parametros
```json
    {
        "usuario":"123",
        "nombre_completo":"Test",
        "tipo":"AFILIADO"
    }
```
3. GET `/users/:entity` consulta por id o por nombre
- Parametros: cambiamos :entity por ´id´ o ´nombre´, se envia por el body el nombre o id 
example id:
    GET `/users/id`
 ```json
    {
        "identify":"1"
    }
```
example nombre 
   
    GET `/users/nombre`
 ```json
    {
        "identify":"nombre"
    }
```
#### Descuentos.
listar descuentos
1. GET `/discounts` lista los descuentos de base de datos 
resultado ejemplo
```json
[
    {
        "id": 1,
        "tipo_descuento": "AFILIACION",
        "porcentaje_descuento": 10
    },
    {
        "id": 2,
        "tipo_descuento": "EMPLEADO",
        "porcentaje_descuento": 30
    },
    {
        "id": 3,
        "tipo_descuento": "CLIENTE",
        "porcentaje_descuento": 5
    }
]
```

2. POST `/discounts` crea un descuento 
- Parametros
```json
 {
    "tipo_descuento":"test",
    "porcentaje_descuento":10
}
```
3. GET `/discounts/:type` consulta los descuentos por tipo
- Parametros: cambiamos :type por el valor que se desea 
example id:
    GET `/discounts/AFILIADO`

respuesta

 ```json
    {
        "response": 10
    }
```
#### Facturas.

1. POST `/invoice` crea una factura 
- Parametros
```json
{
    "id_usuario":1,
    "tipo_compra":"ROPA",
    "valor_compra":50000
}
```

2. GET `/invoice` lista todas las factura 
- example
```json
[
    {
        "id": 1,
        "id_usuario": 1,
        "tipo_compra": "ROPA",
        "valor_compra": "50000.00",
        "porcentaje_descuento": "5.00",
        "descuento_por_porcentaje": "10000.00",
        "descuento_por_cada_cien": "2000.00",
        "valor_descuento": "12000.00",
        "valor_total": "38000.00"
    },
    {
        "id": 2,
        "id_usuario": 4,
        "tipo_compra": "COMESTIBLES",
        "valor_compra": "50000.00",
        "porcentaje_descuento": "30.00",
        "descuento_por_porcentaje": "1666.67",
        "descuento_por_cada_cien": "0.00",
        "valor_descuento": "1666.67",
        "valor_total": "48333.33"
    }
]
```
3. GET `/invoice/:id` consulta una factura por id 
- example `/invoice/1`
```json
{
    "id": 1,
    "id_usuario": 1,
    "tipo_compra": "ROPA",
    "valor_compra": "50000.00",
    "porcentaje_descuento": "5.00",
    "descuento_por_porcentaje": "10000.00",
    "descuento_por_cada_cien": "2000.00",
    "valor_descuento": "12000.00",
    "valor_total": "38000.00"
}
```



