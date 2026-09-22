import { Repository } from 'typeorm';
import { LogAuditoria } from './entities/log-auditoria.entity';
export declare class LogsAuditoriaService {
    private readonly repo;
    constructor(repo: Repository<LogAuditoria>);
    findAll(): Promise<LogAuditoria[]>;
    findByUsuario(usuarioId: number): Promise<LogAuditoria[]>;
    findByEntidad(entidadAfectada: string, entidadId?: number): Promise<LogAuditoria[]>;
    findOne(id: number): Promise<LogAuditoria>;
    create(data: Partial<LogAuditoria>): Promise<LogAuditoria>;
}
