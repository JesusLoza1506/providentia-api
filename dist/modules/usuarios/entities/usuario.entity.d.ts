import { Persona } from '../../personas/entities/persona.entity';
import { Role } from '../../roles/entities/role.entity';
export declare class Usuario {
    id: number;
    personaId: number;
    persona: Persona;
    rolId: number;
    rol: Role;
    email: string;
    passwordHash: string;
    estado: string;
    mfaHabilitado: boolean;
    ultimoLogin: Date;
    createdAt: Date;
    updatedAt: Date;
}
