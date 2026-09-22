import { Matricula } from '../../matriculas/entities/matricula.entity';
import { CursoDocenteSeccion } from '../../curso-docente-seccion/entities/curso-docente-seccion.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Asistencia {
    id: number;
    matriculaId: number;
    matricula: Matricula;
    cursoDocenteSeccionId: number;
    cursoDocenteSeccion: CursoDocenteSeccion;
    fecha: string;
    estado: string;
    horaRegistro: string;
    registradoPorId: number;
    usuario: Usuario;
    createdAt: Date;
    updatedAt: Date;
}
