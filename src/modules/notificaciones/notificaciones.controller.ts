import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { Notificacion } from './entities/notificacion.entity';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly service: NotificacionesService) {}

  @Get()
  findAll(): Promise<Notificacion[]> {
    return this.service.findAll();
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number): Promise<Notificacion[]> {
    return this.service.findByUsuario(usuarioId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Notificacion> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Notificacion>): Promise<Notificacion> {
    return this.service.create(data);
  }

  @Put(':id/leer')
  marcarComoLeida(@Param('id', ParseIntPipe) id: number): Promise<Notificacion> {
    return this.service.marcarComoLeida(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Notificacion>): Promise<Notificacion> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}