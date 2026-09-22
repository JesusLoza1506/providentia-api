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
exports.Horario = void 0;
const typeorm_1 = require("typeorm");
const curso_docente_seccion_entity_1 = require("../../curso-docente-seccion/entities/curso-docente-seccion.entity");
const aula_fisica_entity_1 = require("../../aulas-fisicas/entities/aula-fisica.entity");
let Horario = class Horario {
    id;
    cursoDocenteSeccionId;
    cursoDocenteSeccion;
    aulaFisicaId;
    aulaFisica;
    diaSemana;
    horaInicio;
    horaFin;
    createdAt;
    updatedAt;
};
exports.Horario = Horario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Horario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_docente_seccion_id', type: 'int' }),
    __metadata("design:type", Number)
], Horario.prototype, "cursoDocenteSeccionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_docente_seccion_entity_1.CursoDocenteSeccion, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_docente_seccion_id' }),
    __metadata("design:type", curso_docente_seccion_entity_1.CursoDocenteSeccion)
], Horario.prototype, "cursoDocenteSeccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aula_fisica_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Horario.prototype, "aulaFisicaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aula_fisica_entity_1.AulaFisica, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'aula_fisica_id' }),
    __metadata("design:type", aula_fisica_entity_1.AulaFisica)
], Horario.prototype, "aulaFisica", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dia_semana', type: 'smallint' }),
    __metadata("design:type", Number)
], Horario.prototype, "diaSemana", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_inicio', type: 'time' }),
    __metadata("design:type", String)
], Horario.prototype, "horaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_fin', type: 'time' }),
    __metadata("design:type", String)
], Horario.prototype, "horaFin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Horario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Horario.prototype, "updatedAt", void 0);
exports.Horario = Horario = __decorate([
    (0, typeorm_1.Entity)('horarios')
], Horario);
//# sourceMappingURL=horario.entity.js.map