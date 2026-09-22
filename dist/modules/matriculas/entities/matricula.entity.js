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
exports.Matricula = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
const seccion_entity_1 = require("../../secciones/entities/seccion.entity");
const anio_escolar_entity_1 = require("../../anios-escolares/entities/anio-escolar.entity");
let Matricula = class Matricula {
    id;
    estudianteId;
    estudiante;
    seccionId;
    seccion;
    anioEscolarId;
    anioEscolar;
    fechaMatricula;
    estado;
    tipo;
    createdAt;
    updatedAt;
};
exports.Matricula = Matricula;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Matricula.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], Matricula.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Matricula.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seccion_id', type: 'int' }),
    __metadata("design:type", Number)
], Matricula.prototype, "seccionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => seccion_entity_1.Seccion, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'seccion_id' }),
    __metadata("design:type", seccion_entity_1.Seccion)
], Matricula.prototype, "seccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_escolar_id', type: 'int' }),
    __metadata("design:type", Number)
], Matricula.prototype, "anioEscolarId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anio_escolar_entity_1.AnioEscolar, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'anio_escolar_id' }),
    __metadata("design:type", anio_escolar_entity_1.AnioEscolar)
], Matricula.prototype, "anioEscolar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_matricula', type: 'date' }),
    __metadata("design:type", String)
], Matricula.prototype, "fechaMatricula", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'matriculado' }),
    __metadata("design:type", String)
], Matricula.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Matricula.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Matricula.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Matricula.prototype, "updatedAt", void 0);
exports.Matricula = Matricula = __decorate([
    (0, typeorm_1.Entity)('matriculas'),
    (0, typeorm_1.Unique)(['estudianteId', 'anioEscolarId'])
], Matricula);
//# sourceMappingURL=matricula.entity.js.map