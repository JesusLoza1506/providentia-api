import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Horario } from './entities/horario.entity';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horario)
    private readonly repo: Repository<Horario>,
  ) {}

  async findAll(): Promise<Horario[]> {
    return await this.repo.find({
      relations: { cursoDocenteSeccion: true, aulaFisica: true },
      order: { diaSemana: 'ASC', horaInicio: 'ASC' },
    });
  }

  async findByCursoDocenteSeccion(cursoDocenteSeccionId: number): Promise<Horario[]> {
    return await this.repo.find({
      where: { cursoDocenteSeccionId },
      relations: { aulaFisica: true },
      order: { diaSemana: 'ASC', horaInicio: 'ASC' },
    });
  }

  async findByAulaFisica(aulaFisicaId: number): Promise<Horario[]> {
    return await this.repo.find({
      where: { aulaFisicaId },
      relations: { cursoDocenteSeccion: true },
      order: { diaSemana: 'ASC', horaInicio: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Horario> {
    const item = await this.repo.findOne({
      where: { id },
      relations: { cursoDocenteSeccion: true, aulaFisica: true },
    });
    if (!item) {
      throw new NotFoundException(`Horario con ID ${id} no encontrado`);
    }
    return item;
  }

  async create(data: Partial<Horario>): Promise<Horario> {
    const newItem = this.repo.create(data);
    return await this.repo.save(newItem);
  }

  async update(id: number, data: Partial<Horario>): Promise<Horario> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return await this.repo.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repo.remove(item);
  }
}