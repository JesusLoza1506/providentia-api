import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nota } from './entities/nota.entity';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Nota)
    private readonly repo: Repository<Nota>,
  ) {}

  async findAll(): Promise<Nota[]> {
    return await this.repo.find({
      relations: { matricula: true, curso: true, periodoAcademico: true, competencia: true, docente: true },
    });
  }

  async findByMatricula(matriculaId: number): Promise<Nota[]> {
    return await this.repo.find({
      where: { matriculaId },
      relations: { curso: true, periodoAcademico: true, competencia: true },
    });
  }

  async findByCursoAndPeriodo(cursoId: number, periodoAcademicoId: number): Promise<Nota[]> {
    return await this.repo.find({
      where: { cursoId, periodoAcademicoId },
      relations: { matricula: true, competencia: true, docente: true },
    });
  }

  async findOne(id: number): Promise<Nota> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { matricula: true, curso: true, periodoAcademico: true, competencia: true, docente: true },
    });
    if (!item) throw new NotFoundException(`Nota con ID ${id} no encontrada`);
    return item;
  }

  async create(data: Partial<Nota>): Promise<Nota> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Nota>): Promise<Nota> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}