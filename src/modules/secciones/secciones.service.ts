import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seccion } from './entities/seccion.entity';

@Injectable()
export class SeccionesService {
  constructor(
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>,
  ) {}

  async findAll(): Promise<Seccion[]> {
    return await this.seccionRepository.find({
      relations: { grado: true, anioEscolar: true, tutorDocente: true },
    });
  }

  async findByGradoAndAnio(gradoId: number, anioEscolarId: number): Promise<Seccion[]> {
    return await this.seccionRepository.find({
      where: { gradoId, anioEscolarId },
      relations: { tutorDocente: true },
      order: { nombre: 'ASC' },
    });
  }

  async findByTutor(tutorDocenteId: number): Promise<Seccion[]> {
    return await this.seccionRepository.find({
      where: { tutorDocenteId },
      relations: { grado: true, anioEscolar: true },
    });
  }

  async findOne(id: number): Promise<Seccion> {
    const seccion = await this.seccionRepository.findOne({
      where: { id },
      relations: { grado: true, anioEscolar: true, tutorDocente: true },
    });
    if (!seccion) {
      throw new NotFoundException(`Sección con ID ${id} no encontrada`);
    }
    return seccion;
  }

  async create(data: Partial<Seccion>): Promise<Seccion> {
    const newSeccion = this.seccionRepository.create(data);
    return await this.seccionRepository.save(newSeccion);
  }

  async update(id: number, data: Partial<Seccion>): Promise<Seccion> {
    const seccion = await this.findOne(id);
    Object.assign(seccion, data);
    return await this.seccionRepository.save(seccion);
  }

  async remove(id: number): Promise<void> {
    const seccion = await this.findOne(id);
    await this.seccionRepository.remove(seccion);
  }
}