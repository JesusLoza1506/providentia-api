import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencia } from './entities/asistencia.entity';

@Injectable()
export class AsistenciasService {
  constructor(
    @InjectRepository(Asistencia)
    private readonly repo: Repository<Asistencia>,
  ) {}

  async findAll(): Promise<Asistencia[]> {
    return await this.repo.find({
      relations: { matricula: true, cursoDocenteSeccion: true, usuario: true },
      order: { fecha: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Asistencia> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { matricula: true, cursoDocenteSeccion: true, usuario: true },
    });
    if (!item) throw new NotFoundException(`Asistencia con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Asistencia>): Promise<Asistencia> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  // Permite guardar múltiples asistencias a la vez (Toma de lista completa)
  async createBulk(dataList: Partial<Asistencia>[]): Promise<Asistencia[]> {
    const newItems = this.repo.create(dataList);
    return await this.repo.save(newItems);
  }

  async update(id: number, data: Partial<Asistencia>): Promise<Asistencia> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}