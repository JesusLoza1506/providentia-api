import { Persona } from '../../personas/entities/persona.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Estudiante {
    id: number;
    personaId: number;
    persona: Persona;
    usuarioId: number;
    usuario: Usuario;
    codigoEstudiante: string;
    codigoSiagie: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
}
