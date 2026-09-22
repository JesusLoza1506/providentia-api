import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { Mensaje } from './entities/mensaje.entity';

@Controller('mensajes')
export class MensajesController {
  constructor(private readonly service: MensajesService) {}

  @Get()
  findAll(): Promise<Mensaje[]> {
    return this.service.findAll();
  }

  @Get('conversacion/:usuarioAId/:usuarioBId')
  findConversacion(
    @Param('usuarioAId', ParseIntPipe) usuarioAId: number,
    @Param('usuarioBId', ParseIntPipe) usuarioBId: number,
  ): Promise<Mensaje[]> {
    return this.service.findConversacion(usuarioAId, usuarioBId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Mensaje> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Mensaje>): Promise<Mensaje> {
    return this.service.create(data);
  }

  @Put(':id/leer')
  marcarComoLeido(@Param('id', ParseIntPipe) id: number): Promise<Mensaje> {
    return this.service.marcarComoLeido(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Mensaje>,
  ): Promise<Mensaje> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}