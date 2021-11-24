create database "code_challenge" ;

create table usuarios (
	id serial,
	usuario character varying(20) not null,
	nombre_completo character varying(100),
	tipo character varying(10) default 'CLIENTE',
	fecha_registro date,
	constraint pk_usuarios primary key (id),
	constraint u_usuarios unique(usuario),
	constraint ch_usuarios check(tipo in('CLIENTE','EMPLEADO','AFILIADO') )
);

insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('jrodriguez', 'Jonnathan Rodriguez', 'CLIENTE', '2018-05-21');
insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('ocastro', 'Oscar Castro', 'CLIENTE', '2020-06-01');
insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('arosero', 'Alejandra Rosero', 'EMPLEADO', '2017-01-20');
insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('fhuertas', 'Felipe Huertas', 'EMPLEADO', '2019-02-21');
insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('mcujar', 'Marcela Cujar', 'AFILIADO', '2020-03-22');
insert into usuarios (usuario, nombre_completo, tipo, fecha_registro) values ('schamoro', 'Sebastian Chamorro', 'AFILIADO', '2021-04-23');


create table descuentos(
	id serial,
	tipo_descuento character varying(20) not null,
	porcentaje_descuento integer,
	constraint pk_descuentos primary key (id)
);

insert into descuentos (tipo_descuento, porcentaje_descuento) values('AFILIACION', 10);
insert into descuentos (tipo_descuento, porcentaje_descuento) values('EMPLEADO', 30);
insert into descuentos (tipo_descuento, porcentaje_descuento) values('CLIENTE_DOS_ANOS', 5);


create table facturas(
	id serial,
	id_usuario serial not null,
	tipo_compra character varying(30) not null, 
	valor_compra integer,
	id_descuento serial,
	porcentaje_descuento integer,
	valor_descuento integer,
	valor_total integer,
	constraint pk_facturas primary key (id),
	constraint fk_facturas_id_usuario foreign key (id_usuario) references usuarios (id) match simple,
	constraint fk_facturas_id_descuento foreign key (id_descuento) references descuentos (id) match simple,
	constraint ch_factura_tipo_compra check(tipo_compra in('COMESTIBLES','ELECTRODOMESTICO','ROPA') )
);



