import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: { persona: true, rol: true },
    });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: { persona: true, rol: true },
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email },
      relations: { persona: true, rol: true },
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con email ${email} no encontrado`);
    }
    return usuario;
  }

  async create(data: Partial<Usuario>): Promise<Usuario> {
    const newUsuario = this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(newUsuario);
  }

  async update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    const usuario = await this.findOne(id);
    Object.assign(usuario, data);
    return await this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }
}