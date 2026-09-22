import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll(): Promise<Role[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: number): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado`);
    }
    return role;
  }

  async findByNombre(nombre: string): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ nombre });
    if (!role) {
      throw new NotFoundException(`Rol con nombre "${nombre}" no encontrado`);
    }
    return role;
  }

  async create(data: Partial<Role>): Promise<Role> {
    const newRole = this.roleRepository.create(data);
    return await this.roleRepository.save(newRole);
  }

  async update(id: number, data: Partial<Role>): Promise<Role> {
    const role = await this.findOne(id);
    Object.assign(role, data);
    return await this.roleRepository.save(role);
  }

  async remove(id: number): Promise<void> {
    const role = await this.findOne(id);
    await this.roleRepository.remove(role);
  }
}