import { Usuario } from '../../usuarios/entities/usuario.entity';
import { CursoVirtual } from '../../cursos-virtuales/entities/curso-virtual.entity';
export declare class ChatIaHistorial {
    id: number;
    usuarioId: number;
    usuario: Usuario;
    cursoVirtualId: number;
    cursoVirtual: CursoVirtual;
    pregunta: string;
    respuesta: string;
    fecha: Date;
    createdAt: Date;
    updatedAt: Date;
}
