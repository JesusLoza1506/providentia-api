import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursoVirtual } from './entities/curso-virtual.entity';

@Injectable()
export class CursosVirtualesService {
  constructor(
    @InjectRepository(CursoVirtual)
    private readonly repo: Repository<CursoVirtual>,
  ) {}

  async findAll(): Promise<CursoVirtual[]> {
    return await this.repo.find({
      relations: {
        cursoDocenteSeccion: {
          curso: true,
          seccion: true,
          docente: { persona: true },
        },
      },
    });
  }

  async findOne(id: number): Promise<CursoVirtual> {
    const item = await this.repo.findOne({
      where: { id },
      relations: {
        cursoDocenteSeccion: {
          curso: true,
          seccion: true,
          docente: { persona: true },
        },
      },
    });
    if (!item) throw new NotFoundException(`Curso Virtual con ID ${id} no encontrado`);
    return item;
  }

  async create(data: Partial<CursoVirtual>): Promise<CursoVirtual> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<CursoVirtual>): Promise<CursoVirtual> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}