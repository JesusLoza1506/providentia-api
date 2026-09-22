import { Persona } from '../../personas/entities/persona.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Docente {
    id: number;
    personaId: number;
    persona: Persona;
    usuarioId: number;
    usuario: Usuario;
    codigoDocente: string;
    especialidad: string;
    condicionLaboral: string;
    createdAt: Date;
    updatedAt: Date;
}
