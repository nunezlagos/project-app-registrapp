//Modelo de datos del usuario.

export interface Estudiante {

    nombre: string;
    carrera: string; //'Analista Programador'| 'Ingeniero Informatico' ;
    correo: string;
    uid: string;
    password: string;
    rol:'Estudiante'|'Profesor'| 'admin',
    direccion:string;
    genero:string;
    telefono:number;
    rut:string;
    sede:string;
    foto:string;
    fecha2:string;//Dia en que el estudiante leyo el QR
    hora:string;//Hora en que el estudiante lee el QR
    fecha:Date;//dECHA DE REGISTRO EN LA BASE DE DATOS
    estado:string;

}

//Modelo de datos de las asignaturas.
export interface Asignaturas {
    codigo: string;
    nombre: string;
}

