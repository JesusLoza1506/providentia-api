"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const roles_module_1 = require("./modules/roles/roles.module");
const niveles_module_1 = require("./modules/niveles/niveles.module");
const conceptos_pago_module_1 = require("./modules/conceptos-pago/conceptos-pago.module");
const aulas_fisicas_module_1 = require("./modules/aulas-fisicas/aulas-fisicas.module");
const grados_module_1 = require("./modules/grados/grados.module");
const anios_escolares_module_1 = require("./modules/anios-escolares/anios-escolares.module");
const personas_module_1 = require("./modules/personas/personas.module");
const usuarios_module_1 = require("./modules/usuarios/usuarios.module");
const estudiantes_module_1 = require("./modules/estudiantes/estudiantes.module");
const apoderados_module_1 = require("./modules/apoderados/apoderados.module");
const docentes_module_1 = require("./modules/docentes/docentes.module");
const estudiante_apoderado_module_1 = require("./modules/estudiante-apoderado/estudiante-apoderado.module");
const secciones_module_1 = require("./modules/secciones/secciones.module");
const matriculas_module_1 = require("./modules/matriculas/matriculas.module");
const cursos_module_1 = require("./modules/cursos/cursos.module");
const competencias_module_1 = require("./modules/competencias/competencias.module");
const curso_docente_seccion_module_1 = require("./modules/curso-docente-seccion/curso-docente-seccion.module");
const horarios_module_1 = require("./modules/horarios/horarios.module");
const periodos_academicos_module_1 = require("./modules/periodos-academicos/periodos-academicos.module");
const notas_module_1 = require("./modules/notas/notas.module");
const asistencias_module_1 = require("./modules/asistencias/asistencias.module");
const justificaciones_module_1 = require("./modules/justificaciones/justificaciones.module");
const cursos_virtuales_module_1 = require("./modules/cursos-virtuales/cursos-virtuales.module");
const materiales_module_1 = require("./modules/materiales/materiales.module");
const tareas_module_1 = require("./modules/tareas/tareas.module");
const entregas_tareas_module_1 = require("./modules/entregas-tareas/entregas-tareas.module");
const pagos_module_1 = require("./modules/pagos/pagos.module");
const notificaciones_module_1 = require("./modules/notificaciones/notificaciones.module");
const mensajes_module_1 = require("./modules/mensajes/mensajes.module");
const foros_module_1 = require("./modules/foros/foros.module");
const foro_mensajes_module_1 = require("./modules/foro-mensajes/foro-mensajes.module");
const examenes_module_1 = require("./modules/examenes/examenes.module");
const preguntas_module_1 = require("./modules/preguntas/preguntas.module");
const respuestas_estudiante_module_1 = require("./modules/respuestas-estudiante/respuestas-estudiante.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                autoLoadEntities: true,
                synchronize: true,
            }),
            roles_module_1.RolesModule,
            niveles_module_1.NivelesModule,
            conceptos_pago_module_1.ConceptosPagoModule,
            aulas_fisicas_module_1.AulasFisicasModule,
            grados_module_1.GradosModule,
            anios_escolares_module_1.AniosEscolaresModule,
            personas_module_1.PersonasModule,
            usuarios_module_1.UsuariosModule,
            estudiantes_module_1.EstudiantesModule,
            apoderados_module_1.ApoderadosModule,
            docentes_module_1.DocentesModule,
            estudiante_apoderado_module_1.EstudianteApoderadoModule,
            secciones_module_1.SeccionesModule,
            matriculas_module_1.MatriculasModule,
            cursos_module_1.CursosModule,
            competencias_module_1.CompetenciasModule,
            curso_docente_seccion_module_1.CursoDocenteSeccionModule,
            horarios_module_1.HorariosModule,
            periodos_academicos_module_1.PeriodosAcademicosModule,
            notas_module_1.NotasModule,
            asistencias_module_1.AsistenciasModule,
            justificaciones_module_1.JustificacionesModule,
            cursos_virtuales_module_1.CursosVirtualesModule,
            materiales_module_1.MaterialesModule,
            tareas_module_1.TareasModule,
            entregas_tareas_module_1.EntregasTareasModule,
            pagos_module_1.PagosModule,
            notificaciones_module_1.NotificacionesModule,
            mensajes_module_1.MensajesModule,
            foros_module_1.ForosModule,
            foro_mensajes_module_1.ForoMensajesModule,
            examenes_module_1.ExamenesModule,
            preguntas_module_1.PreguntasModule,
            respuestas_estudiante_module_1.RespuestasEstudianteModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map