import { LogsAuditoriaService } from './logs-auditoria.service';
import { LogAuditoria } from './entities/log-auditoria.entity';
export declare class LogsAuditoriaController {
    private readonly service;
    constructor(service: LogsAuditoriaService);
    findAll(): Promise<LogAuditoria[]>;
    findByUsuario(usuarioId: number): Promise<LogAuditoria[]>;
    findByEntidad(entidadAfectada: string, entidadId?: string): Promise<LogAuditoria[]>;
    findOne(id: number): Promise<LogAuditoria>;
    create(data: Partial<LogAuditoria>): Promise<LogAuditoria>;
}
