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
exports.CursoDocenteSeccion = void 0;
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("../../cursos/entities/curso.entity");
const docente_entity_1 = require("../../docentes/entities/docente.entity");
const seccion_entity_1 = require("../../secciones/entities/seccion.entity");
const anio_escolar_entity_1 = require("../../anios-escolares/entities/anio-escolar.entity");
let CursoDocenteSeccion = class CursoDocenteSeccion {
    id;
    cursoId;
    curso;
    docenteId;
    docente;
    seccionId;
    seccion;
    anioEscolarId;
    anioEscolar;
    createdAt;
    updatedAt;
};
exports.CursoDocenteSeccion = CursoDocenteSeccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CursoDocenteSeccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_id', type: 'int' }),
    __metadata("design:type", Number)
], CursoDocenteSeccion.prototype, "cursoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", curso_entity_1.Curso)
], CursoDocenteSeccion.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'docente_id', type: 'int' }),
    __metadata("design:type", Number)
], CursoDocenteSeccion.prototype, "docenteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_entity_1.Docente, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'docente_id' }),
    __metadata("design:type", docente_entity_1.Docente)
], CursoDocenteSeccion.prototype, "docente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seccion_id', type: 'int' }),
    __metadata("design:type", Number)
], CursoDocenteSeccion.prototype, "seccionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seccion_entity_1.Seccion, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'seccion_id' }),
    __metadata("design:type", seccion_entity_1.Seccion)
], CursoDocenteSeccion.prototype, "seccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_escolar_id', type: 'int' }),
    __metadata("design:type", Number)
], CursoDocenteSeccion.prototype, "anioEscolarId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anio_escolar_entity_1.AnioEscolar, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'anio_escolar_id' }),
    __metadata("design:type", anio_escolar_entity_1.AnioEscolar)
], CursoDocenteSeccion.prototype, "anioEscolar", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CursoDocenteSeccion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CursoDocenteSeccion.prototype, "updatedAt", void 0);
exports.CursoDocenteSeccion = CursoDocenteSeccion = __decorate([
    (0, typeorm_1.Entity)('curso_docente_seccion'),
    (0, typeorm_1.Unique)(['cursoId', 'seccionId', 'anioEscolarId'])
], CursoDocenteSeccion);
//# sourceMappingURL=curso-docente-seccion.entity.js.map