import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Justificacion } from './entities/justificacion.entity';

@Injectable()
export class JustificacionesService {
  constructor(
    @InjectRepository(Justificacion)
    private readonly repo: Repository<Justificacion>,
  ) {}

  async findAll(): Promise<Justificacion[]> {
    return await this.repo.find({
      relations: {
        asistencia: true,
        usuarioAprobador: true,
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findByAsistencia(asistenciaId: number): Promise<Justificacion> {
    const item = await this.repo.findOne({
      where: { asistenciaId },
      relations: {
        asistencia: true,
        usuarioAprobador: true,
      },
    });
    if (!item) {
      throw new NotFoundException(`No existe justificación para la asistencia ID ${asistenciaId}`);
    }
    return item;
  }

  async findByEstado(estadoAprobacion: string): Promise<Justificacion[]> {
    return await this.repo.find({
      where: { estadoAprobacion },
      relations: {
        asistencia: true,
        usuarioAprobador: true,
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Justificacion> {
    const item = await this.repo.findOne({
      where: { id },
      relations: {
        asistencia: true,
        usuarioAprobador: true,
      },
    });
    if (!item) throw new NotFoundException(`Justificación con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Justificacion>): Promise<Justificacion> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Justificacion>): Promise<Justificacion> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}