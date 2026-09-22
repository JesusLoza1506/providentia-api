import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find({
      relations: { persona: true, usuario: true },
    });
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { id },
      relations: { persona: true, usuario: true },
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return estudiante;
  }

  async findByUsuario(usuarioId: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { usuarioId },
      relations: { persona: true, usuario: true },
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID de usuario ${usuarioId} no encontrado`);
    }
    return estudiante;
  }

  async findByCodigo(codigoEstudiante: string): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { codigoEstudiante },
      relations: { persona: true, usuario: true },
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con código ${codigoEstudiante} no encontrado`);
    }
    return estudiante;
  }

  async create(data: Partial<Estudiante>): Promise<Estudiante> {
    const newEstudiante = this.estudianteRepository.create(data);
    return await this.estudianteRepository.save(newEstudiante);
  }

  async update(id: number, data: Partial<Estudiante>): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    Object.assign(estudiante, data);
    return await this.estudianteRepository.save(estudiante);
  }

  async remove(id: number): Promise<void> {
    const estudiante = await this.findOne(id);
    await this.estudianteRepository.remove(estudiante);
  }
}