import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoderadosController } from './apoderados.controller';
import { ApoderadosService } from './apoderados.service';
import { Apoderado } from './entities/apoderado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apoderado])],
  controllers: [ApoderadosController],
  providers: [ApoderadosService],
  exports: [ApoderadosService, TypeOrmModule],
})
export class ApoderadosModule {}