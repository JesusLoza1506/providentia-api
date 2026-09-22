import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogAuditoria } from './entities/log-auditoria.entity';

@Injectable()
export class LogsAuditoriaService {
  constructor(
    @InjectRepository(LogAuditoria)
    private readonly repo: Repository<LogAuditoria>,
  ) {}

  async findAll(): Promise<LogAuditoria[]> {
    return await this.repo.find({
      relations: { usuario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findByUsuario(usuarioId: number): Promise<LogAuditoria[]> {
    return await this.repo.find({
      where: { usuarioId },
      relations: { usuario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findByEntidad(entidadAfectada: string, entidadId?: number): Promise<LogAuditoria[]> {
    const whereCondition: any = { entidadAfectada };
    if (entidadId) {
      whereCondition.entidadId = entidadId;
    }

    return await this.repo.find({
      where: whereCondition,
      relations: { usuario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findOne(id: number): Promise<LogAuditoria> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { usuario: true },
    });
    if (!item) throw new NotFoundException(`Log de auditoría con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<LogAuditoria>): Promise<LogAuditoria> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }
}