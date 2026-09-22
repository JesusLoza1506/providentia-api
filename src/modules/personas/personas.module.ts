import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  controllers: [PersonasController],
  providers: [PersonasService],
  exports: [PersonasService, TypeOrmModule],
})
export class PersonasModule {}