import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosVirtualesController } from './cursos-virtuales.controller';
import { CursosVirtualesService } from './cursos-virtuales.service';
import { CursoVirtual } from './entities/curso-virtual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CursoVirtual])],
  controllers: [CursosVirtualesController],
  providers: [CursosVirtualesService],
  exports: [CursosVirtualesService, TypeOrmModule],
})
export class CursosVirtualesModule {}