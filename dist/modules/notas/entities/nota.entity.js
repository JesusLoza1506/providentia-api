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
exports.Nota = void 0;
const typeorm_1 = require("typeorm");
const matricula_entity_1 = require("../../matriculas/entities/matricula.entity");
const curso_entity_1 = require("../../cursos/entities/curso.entity");
const periodo_academico_entity_1 = require("../../periodos-academicos/entities/periodo-academico.entity");
const competencia_entity_1 = require("../../competencias/entities/competencia.entity");
const docente_entity_1 = require("../../docentes/entities/docente.entity");
let Nota = class Nota {
    id;
    matriculaId;
    matricula;
    cursoId;
    curso;
    periodoAcademicoId;
    periodoAcademico;
    competenciaId;
    competencia;
    tipoEvaluacion;
    valorLiteral;
    valorNumerico;
    registradoPor;
    docente;
    fechaRegistro;
    createdAt;
    updatedAt;
};
exports.Nota = Nota;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Nota.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'matricula_id', type: 'int' }),
    __metadata("design:type", Number)
], Nota.prototype, "matriculaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => matricula_entity_1.Matricula, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'matricula_id' }),
    __metadata("design:type", matricula_entity_1.Matricula)
], Nota.prototype, "matricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_id', type: 'int' }),
    __metadata("design:type", Number)
], Nota.prototype, "cursoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", curso_entity_1.Curso)
], Nota.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'periodo_academico_id', type: 'int' }),
    __metadata("design:type", Number)
], Nota.prototype, "periodoAcademicoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => periodo_academico_entity_1.PeriodoAcademico, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'periodo_academico_id' }),
    __metadata("design:type", periodo_academico_entity_1.PeriodoAcademico)
], Nota.prototype, "periodoAcademico", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'competencia_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Nota.prototype, "competenciaId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => competencia_entity_1.Competencia, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'competencia_id' }),
    __metadata("design:type", competencia_entity_1.Competencia)
], Nota.prototype, "competencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_evaluacion', type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Nota.prototype, "tipoEvaluacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_literal', type: 'varchar', length: 2, nullable: true }),
    __metadata("design:type", String)
], Nota.prototype, "valorLiteral", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_numerico', type: 'decimal', precision: 4, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Nota.prototype, "valorNumerico", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registrado_por', type: 'int' }),
    __metadata("design:type", Number)
], Nota.prototype, "registradoPor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_entity_1.Docente, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'registrado_por' }),
    __metadata("design:type", docente_entity_1.Docente)
], Nota.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_registro' }),
    __metadata("design:type", Date)
], Nota.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Nota.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Nota.prototype, "updatedAt", void 0);
exports.Nota = Nota = __decorate([
    (0, typeorm_1.Entity)('notas')
], Nota);
//# sourceMappingURL=nota.entity.js.map