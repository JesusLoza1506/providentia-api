import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from './entities/matricula.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matricula)
    private readonly repo: Repository<Matricula>,
  ) {}

  async findAll(): Promise<Matricula[]> {
    return await this.repo.find({
      relations: { estudiante: true, seccion: true, anioEscolar: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findByEstudiante(estudianteId: number): Promise<Matricula[]> {
    return await this.repo.find({
      where: { estudianteId },
      relations: { seccion: true, anioEscolar: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findBySeccion(seccionId: number, anioEscolarId?: number): Promise<Matricula[]> {
    const whereCondition: any = { seccionId };
    if (anioEscolarId) {
      whereCondition.anioEscolarId = anioEscolarId;
    }

    return await this.repo.find({
      where: whereCondition,
      relations: { estudiante: true, anioEscolar: true },
    });
  }

  async findOne(id: number): Promise<Matricula> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { estudiante: true, seccion: true, anioEscolar: true },
    });
    if (!item) {
      throw new NotFoundException(`Matrícula con ID ${id} no encontrada`);
    }
    return item;
  }

  async create(data: Partial<Matricula>): Promise<Matricula> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Matricula>): Promise<Matricula> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}