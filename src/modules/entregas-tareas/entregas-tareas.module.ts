import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntregasTareasController } from './entregas-tareas.controller';
import { EntregasTareasService } from './entregas-tareas.service';
import { EntregaTarea } from './entities/entrega-tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntregaTarea])],
  controllers: [EntregasTareasController],
  providers: [EntregasTareasService],
  exports: [EntregasTareasService, TypeOrmModule],
})
export class EntregasTareasModule {}