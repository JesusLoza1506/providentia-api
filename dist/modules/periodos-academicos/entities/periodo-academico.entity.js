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
exports.PeriodoAcademico = void 0;
const typeorm_1 = require("typeorm");
const anio_escolar_entity_1 = require("../../anios-escolares/entities/anio-escolar.entity");
let PeriodoAcademico = class PeriodoAcademico {
    id;
    anioEscolarId;
    anioEscolar;
    nombre;
    fechaInicio;
    fechaFin;
    orden;
    createdAt;
    updatedAt;
};
exports.PeriodoAcademico = PeriodoAcademico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PeriodoAcademico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_escolar_id', type: 'int' }),
    __metadata("design:type", Number)
], PeriodoAcademico.prototype, "anioEscolarId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anio_escolar_entity_1.AnioEscolar, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'anio_escolar_id' }),
    __metadata("design:type", anio_escolar_entity_1.AnioEscolar)
], PeriodoAcademico.prototype, "anioEscolar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], PeriodoAcademico.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_inicio', type: 'date' }),
    __metadata("design:type", String)
], PeriodoAcademico.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_fin', type: 'date' }),
    __metadata("design:type", String)
], PeriodoAcademico.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], PeriodoAcademico.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], PeriodoAcademico.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], PeriodoAcademico.prototype, "updatedAt", void 0);
exports.PeriodoAcademico = PeriodoAcademico = __decorate([
    (0, typeorm_1.Entity)('periodos_academicos')
], PeriodoAcademico);
//# sourceMappingURL=periodo-academico.entity.js.map