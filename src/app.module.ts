import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './modules/roles/roles.module';
import { NivelesModule } from './modules/niveles/niveles.module';
import { ConceptosPagoModule } from './modules/conceptos-pago/conceptos-pago.module';
import { AulasFisicasModule } from './modules/aulas-fisicas/aulas-fisicas.module';
import { GradosModule } from './modules/grados/grados.module';
import { AniosEscolaresModule } from './modules/anios-escolares/anios-escolares.module';
import { PersonasModule } from './modules/personas/personas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { ApoderadosModule } from './modules/apoderados/apoderados.module';
import { DocentesModule } from './modules/docentes/docentes.module';
import { EstudianteApoderadoModule } from './modules/estudiante-apoderado/estudiante-apoderado.module';
import { SeccionesModule } from './modules/secciones/secciones.module';
import { MatriculasModule } from './modules/matriculas/matriculas.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { CompetenciasModule } from './modules/competencias/competencias.module';
import { CursoDocenteSeccionModule } from './modules/curso-docente-seccion/curso-docente-seccion.module';
import { HorariosModule } from './modules/horarios/horarios.module';
import { PeriodosAcademicosModule } from './modules/periodos-academicos/periodos-academicos.module';
import { NotasModule } from './modules/notas/notas.module';
import { AsistenciasModule } from './modules/asistencias/asistencias.module';
import { JustificacionesModule } from './modules/justificaciones/justificaciones.module';
import { CursosVirtualesModule } from './modules/cursos-virtuales/cursos-virtuales.module';
import { MaterialesModule } from './modules/materiales/materiales.module';
import { TareasModule } from './modules/tareas/tareas.module';
import { EntregasTareasModule } from './modules/entregas-tareas/entregas-tareas.module';
import { PagosModule } from './modules/pagos/pagos.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';
import { MensajesModule } from './modules/mensajes/mensajes.module';
import { ForosModule } from './modules/foros/foros.module';
import { ForoMensajesModule } from './modules/foro-mensajes/foro-mensajes.module';
import { ExamenesModule } from './modules/examenes/examenes.module';
import { PreguntasModule } from './modules/preguntas/preguntas.module';
import { RespuestasEstudianteModule } from './modules/respuestas-estudiante/respuestas-estudiante.module';

@Module({
  imports: [
    // 1. Cargar variables de entorno desde el archivo .env
    ConfigModule.forRoot({
      isGlobal: true, // Disponible en toda la aplicación
    }),

    // 2. Conectar TypeORM a PostgreSQL usando las variables de entorno
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true, // Carga automática de modelos/entidades
      synchronize: true,     // En desarrollo crea/actualiza tablas automáticamente
    }),

    RolesModule,

    NivelesModule,

    ConceptosPagoModule,

    AulasFisicasModule,

    GradosModule,

    AniosEscolaresModule,

    PersonasModule,

    UsuariosModule,

    EstudiantesModule,

    ApoderadosModule,

    DocentesModule,

    EstudianteApoderadoModule,

    SeccionesModule,

    MatriculasModule,

    CursosModule,

    CompetenciasModule,

    CursoDocenteSeccionModule,

    HorariosModule,

    PeriodosAcademicosModule,

    NotasModule,

    AsistenciasModule,

    JustificacionesModule,

    CursosVirtualesModule,

    MaterialesModule,

    TareasModule,

    EntregasTareasModule,

    PagosModule,

    NotificacionesModule,

    MensajesModule,

    ForosModule,

    ForoMensajesModule,

    ExamenesModule,

    PreguntasModule,

    RespuestasEstudianteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}