import { Persona } from '../../personas/entities/persona.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
export declare class Apoderado {
    id: number;
    personaId: number;
    persona: Persona;
    usuarioId: number;
    usuario: Usuario;
    ocupacion: string;
    createdAt: Date;
    updatedAt: Date;
}
