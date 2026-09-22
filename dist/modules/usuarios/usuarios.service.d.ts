import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    findByEmail(email: string): Promise<Usuario>;
    create(data: Partial<Usuario>): Promise<Usuario>;
    update(id: number, data: Partial<Usuario>): Promise<Usuario>;
    remove(id: number): Promise<void>;
}
