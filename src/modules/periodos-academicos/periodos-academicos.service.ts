import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeriodoAcademico } from './entities/periodo-academico.entity';

@Injectable()
export class PeriodosAcademicosService {
  constructor(
    @InjectRepository(PeriodoAcademico)
    private readonly repo: Repository<PeriodoAcademico>,
  ) {}

  async findAll(): Promise<PeriodoAcademico[]> {
    return await this.repo.find({
      relations: { anioEscolar: true },
      order: { orden: 'ASC' },
    });
  }

  async findByAnioEscolar(anioEscolarId: number): Promise<PeriodoAcademico[]> {
    return await this.repo.find({
      where: { anioEscolarId },
      order: { orden: 'ASC' },
    });
  }

  async findOne(id: number): Promise<PeriodoAcademico> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { anioEscolar: true },
    });
    if (!item) {
      throw new NotFoundException(`Periodo Académico con ID ${id} no encontrado`);
    }
    return item;
  }

  async create(data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<PeriodoAcademico>): Promise<PeriodoAcademico> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}