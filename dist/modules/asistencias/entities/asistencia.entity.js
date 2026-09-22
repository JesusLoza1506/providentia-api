"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asistencia = void 0;
const typeorm_1 = require("typeorm");
const matricula_entity_1 = require("../../matriculas/entities/matricula.entity");
const curso_docente_seccion_entity_1 = require("../../curso-docente-seccion/entities/curso-docente-seccion.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Asistencia = class Asistencia {
    id;
    matriculaId;
    matricula;
    cursoDocenteSeccionId;
    cursoDocenteSeccion;
    fecha;
    estado;
    horaRegistro;
    registradoPorId;
    usuario;
    createdAt;
    updatedAt;
};
exports.Asistencia = Asistencia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Asistencia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'matricula_id', type: 'int' }),
    __metadata("design:type", Number)
], Asistencia.prototype, "matriculaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matricula_entity_1.Matricula, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'matricula_id' }),
    __metadata("design:type", matricula_entity_1.Matricula)
], Asistencia.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_docente_seccion_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Asistencia.prototype, "cursoDocenteSeccionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_docente_seccion_entity_1.CursoDocenteSeccion, { onDelete: 'CASCADE', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_docente_seccion_id' }),
    __metadata("design:type", curso_docente_seccion_entity_1.CursoDocenteSeccion)
], Asistencia.prototype, "cursoDocenteSeccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Asistencia.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Asistencia.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_registro', type: 'time', nullable: true }),
    __metadata("design:type", String)
], Asistencia.prototype, "horaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registrado_por', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Asistencia.prototype, "registradoPorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'registrado_por' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Asistencia.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Asistencia.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Asistencia.prototype, "updatedAt", void 0);
exports.Asistencia = Asistencia = __decorate([
    (0, typeorm_1.Entity)('asistencias'),
    (0, typeorm_1.Unique)(['matriculaId', 'cursoDocenteSeccionId', 'fecha'])
], Asistencia);
//# sourceMappingURL=asistencia.entity.js.map