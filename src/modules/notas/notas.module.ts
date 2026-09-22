import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotasController } from './notas.controller';
import { NotasService } from './notas.service';
import { Nota } from './entities/nota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nota])],
  controllers: [NotasController],
  providers: [NotasService],
  exports: [NotasService, TypeOrmModule],
})
export class NotasModule {}