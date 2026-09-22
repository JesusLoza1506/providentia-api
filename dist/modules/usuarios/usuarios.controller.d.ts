import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<Usuario[]>;
    findByEmail(email: string): Promise<Usuario>;
    findOne(id: number): Promise<Usuario>;
    create(data: Partial<Usuario>): Promise<Usuario>;
    update(id: number, data: Partial<Usuario>): Promise<Usuario>;
    remove(id: number): Promise<void>;
}
