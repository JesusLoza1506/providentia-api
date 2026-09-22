import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradosController } from './grados.controller';
import { GradosService } from './grados.service';
import { Grado } from './entities/grado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grado])],
  controllers: [GradosController],
  providers: [GradosService],
  exports: [GradosService, TypeOrmModule],
})
export class GradosModule {}