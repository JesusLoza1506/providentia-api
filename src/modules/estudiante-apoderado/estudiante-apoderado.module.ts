import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteApoderadoController } from './estudiante-apoderado.controller';
import { EstudianteApoderadoService } from './estudiante-apoderado.service';
import { EstudianteApoderado } from './entities/estudiante-apoderado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstudianteApoderado])],
  controllers: [EstudianteApoderadoController],
  providers: [EstudianteApoderadoService],
  exports: [EstudianteApoderadoService, TypeOrmModule],
})
export class EstudianteApoderadoModule {}