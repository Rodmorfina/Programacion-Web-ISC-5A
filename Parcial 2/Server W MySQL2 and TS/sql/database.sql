create database if not exists practica;
use practica;

CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL DEFAULT 0,
        description TEXT,
        active BOOLEAN NOT NULL DEFAULT TRUE
);

 INSERT INTO products (name, price, stock, description) VALUES
    ('Laptop Pro 14', 21999.00, 12, 'Laptop de 14 pulgadas para trabajo y estudio.'),
    ('Mouse Inalambrico', 399.00, 45, 'Mouse inalambrico con conexion Bluetooth.'),
    ('Teclado Mecanico', 1299.00, 20, 'Teclado mecanico con retroiluminacion.'),
    ('Monitor 24 Pulgadas', 3299.00, 18, 'Monitor Full HD de 24 pulgadas.'),
    ('Audifonos Bluetooth', 899.00, 35, 'Audifonos Bluetooth con microfono.'),
    ('Webcam Full HD', 749.00, 22, 'Camara web Full HD para videollamadas.'),
    ('Disco SSD 1TB', 1599.00, 16, 'Unidad de estado solido de un terabyte.'),
    ('Memoria USB 64GB', 199.00, 60, 'Memoria USB de 64 GB.'),
    ('Base para Laptop', 549.00, 30, 'Base ajustable de aluminio para laptop.'),
    ('Cargador USB C', 459.00, 40, 'Cargador USB C de carga rapida.'),
    ('Cable HDMI', 249.00, 55, 'Cable HDMI de dos metros.'),
    ('Router WiFi 6', 1899.00, 14, 'Router WiFi 6 de doble banda.'),
    ('Impresora Multifuncional', 2799.00, 10, 'Impresora con escaner y copiado.'),
    ('Silla de Oficina', 3499.00, 8, 'Silla ergonomica para oficina.'),
    ('Escritorio Compacto', 2499.00, 11, 'Escritorio compacto de madera.'),
    ('Lampara LED', 379.00, 32, 'Lampara LED de escritorio.'),
    ('Bocina Portatil', 699.00, 26, 'Bocina portatil con Bluetooth.'),
    ('Smartwatch Fit', 1499.00, 19, 'Reloj inteligente con monitor de actividad.'),
    ('Tablet 10 Pulgadas', 4999.00, 13, 'Tablet de 10 pulgadas con pantalla HD.'),
    ('Mochila para Laptop', 799.00, 24, 'Mochila acolchada para laptop de 15 pulgadas.'),
    ('Regleta Electrica', 299.00, 38, 'Regleta con seis contactos.'),
    ('Adaptador USB C', 329.00, 42, 'Adaptador USB C a HDMI.'),
    ('Microfono USB', 1099.00, 17, 'Microfono USB para llamadas y grabacion.'),
    ('Soporte para Monitor', 649.00, 21, 'Soporte ajustable para monitor.'),
    ('Limpiador de Pantalla', 159.00, 50, 'Kit para limpiar pantallas.'); 

    
select  * from products;