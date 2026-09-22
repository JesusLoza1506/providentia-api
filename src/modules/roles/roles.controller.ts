import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get('nombre/:nombre')
  findByNombre(@Param('nombre') nombre: string): Promise<Role> {
    return this.rolesService.findByNombre(nombre);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Role>): Promise<Role> {
    return this.rolesService.create(data);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Role>,
  ): Promise<Role> {
    return this.rolesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}