import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaEstudiante } from './entities/respuesta-estudiante.entity';
import { RespuestasEstudianteService } from './respuestas-estudiante.service';
import { RespuestasEstudianteController } from './respuestas-estudiante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RespuestaEstudiante])],
  controllers: [RespuestasEstudianteController],
  providers: [RespuestasEstudianteService],
  exports: [RespuestasEstudianteService],
})
export class RespuestasEstudianteModule {}