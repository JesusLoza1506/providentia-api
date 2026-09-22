import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return await this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOneBy({ id });
    if (!persona) {
      throw new NotFoundException(`Persona con ID ${id} no encontrada`);
    }
    return persona;
  }

  async findByNumeroDocumento(numeroDocumento: string): Promise<Persona> {
    const persona = await this.personaRepository.findOneBy({ numeroDocumento });
    if (!persona) {
      throw new NotFoundException(`Persona con documento ${numeroDocumento} no encontrada`);
    }
    return persona;
  }

  async create(data: Partial<Persona>): Promise<Persona> {
    const newPersona = this.personaRepository.create(data);
    return await this.personaRepository.save(newPersona);
  }

  async update(id: number, data: Partial<Persona>): Promise<Persona> {
    const persona = await this.findOne(id);
    Object.assign(persona, data);
    return await this.personaRepository.save(persona);
  }

  async remove(id: number): Promise<void> {
    const persona = await this.findOne(id);
    await this.personaRepository.remove(persona);
  }
}