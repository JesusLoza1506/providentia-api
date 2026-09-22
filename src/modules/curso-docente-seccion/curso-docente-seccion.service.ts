import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CursoDocenteSeccion } from './entities/curso-docente-seccion.entity';

@Injectable()
export class CursoDocenteSeccionService {
  constructor(
    @InjectRepository(CursoDocenteSeccion)
    private readonly repo: Repository<CursoDocenteSeccion>,
  ) {}

  async findAll(): Promise<CursoDocenteSeccion[]> {
    return await this.repo.find({
      relations: {
        curso: true,
        docente: { persona: true },
        seccion: { grado: true },
        anioEscolar: true,
      },
    });
  }

  async findOne(id: number): Promise<CursoDocenteSeccion> {
    const item = await this.repo.findOne({
      where: { id },
      relations: {
        curso: true,
        docente: { persona: true },
        seccion: { grado: true },
        anioEscolar: true,
      },
    });
    if (!item) {
      throw new NotFoundException(`Curso-Docente-Sección con ID ${id} no encontrado`);
    }
    return item;
  }

  async create(data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<CursoDocenteSeccion>): Promise<CursoDocenteSeccion> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}