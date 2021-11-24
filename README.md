# code-challenge
- Author: Jonnathan Andres Rodriguez Tello

- ** Descripción:** Este desarrollo es un API de facturaciones con descuentos, dependiendo de 
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

### correr el Backup en base de datos


### Clone project

1. `git clone https://github.com/jrodrigueztello/code-challenge.git`
2. `cd ceb-provider/automation-task-worker`
3. `npm i`


### Using pm2

1. `pm2 start ecosystem.config.js`

## Deployment

1. `git clone https://github.com/cebroker/ceb-providers.git`
2. `cd cautomation-task-worker`
3. `npm i`
4. `sh deploy.sh -e production -v 1.0.0` or `sh deploy.sh -e test`

#Test Site

- test site `none`

### Environment variables

```ruby
#DATABASE VARIABLES
# AWS
AWS_SQS_ARN=sqs_arn
AWS_SQS_URL=sqs_url
AWS_SQS_BATCH_SIZE=10
AWS_SQS_DELAY=5
AWS_SQS_DELAY_FOR_RESCHEDULE=5
AWS_SQS_WATCH_TIME=5
AWS_SQS_VISIVILITY=5
AWS_SQS_MAX_MESSAGES=10
AWS_REGION=us-east-1
AWS_ACCESS_KEY=EXAMPLEAMAZONACCESSKEY
AWS_SECRET_KEY=EXAMPLEAMAZONSECRETKEY
AWS_REGION=us-east-1
AWS_API_VERSION=2012-11-05

# redis
REDIS_PREFIX=AUTOMATION_TASK
REDIS_HOST= redisconnection
REDIS_PORT= 45545
REDIS_PASSWORD= password
REDIS_TTL = 4
EXPIRATION_SECONDS_LAST_UPDATE = 1212

#mongo
MONGO_RECONNECT_TRIES = 1
MONGO_HOST='host'
MONGO_PORT=27017
MONGO_DATABASE=database_name
MONGO_USER='mongouser'
MONGO_PASSWORD='mongopass'
MONGO_REQUEST_TIMEOUT=5000
MONGO_REPLICASET=mongoreplicasetstring
MONGO_SSL=1
MONGO_AUTH_SOURCE=admin

# ORACLE
ORACLE_CLIENT=oracledb
ORACLE_CONNECTION_STRING=1.1.1.1:1111/DB_NAME
ORACLE_USER=HEALTHQA
ORACLE_PASSWORD=COLOMBIA
DEVSPUPPORT_URL= devsupport_url
ACQUIRE_CONNECTION_TIMEOUT=1000
ORACLE_POOL_MIN=0
ORACLE_POOL_MAX=10

#FTP
SFTP_PORT=22
SFTP_HOST=10.10.10.10
SFTP_USER=test
SFTP_PASSWORD=XXXXXX

AUTOMATION_UPDATE_BATCH_SIZE=1
CAME_FROM=AUTOMATION_TASK
BATCH_MONTH_SIZE=3
ORACLE_REQUEST_TIMEOUT=1000000
PATH_FPT_REPORT=/automation-task-report
TIME_ZONE=America/New_York
STORAGE_API=STORAGE_API_URL
PID_USER_LOGON=52
MAX_MONGO_RETRY_COUNT=3
COURSES_APPROVED_REPORT=COURSES_APPROVED_REPORT_
```