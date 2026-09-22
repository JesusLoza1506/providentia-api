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
exports.Seccion = void 0;
const typeorm_1 = require("typeorm");
const grado_entity_1 = require("../../grados/entities/grado.entity");
const anio_escolar_entity_1 = require("../../anios-escolares/entities/anio-escolar.entity");
const docente_entity_1 = require("../../docentes/entities/docente.entity");
let Seccion = class Seccion {
    id;
    gradoId;
    grado;
    anioEscolarId;
    anioEscolar;
    nombre;
    turno;
    capacidadMaxima;
    tutorDocenteId;
    tutorDocente;
    createdAt;
    updatedAt;
};
exports.Seccion = Seccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grado_id', type: 'int' }),
    __metadata("design:type", Number)
], Seccion.prototype, "gradoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => grado_entity_1.Grado, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'grado_id' }),
    __metadata("design:type", grado_entity_1.Grado)
], Seccion.prototype, "grado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'anio_escolar_id', type: 'int' }),
    __metadata("design:type", Number)
], Seccion.prototype, "anioEscolarId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anio_escolar_entity_1.AnioEscolar, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'anio_escolar_id' }),
    __metadata("design:type", anio_escolar_entity_1.AnioEscolar)
], Seccion.prototype, "anioEscolar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5 }),
    __metadata("design:type", String)
], Seccion.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Seccion.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'capacidad_maxima', type: 'smallint' }),
    __metadata("design:type", Number)
], Seccion.prototype, "capacidadMaxima", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tutor_docente_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Seccion.prototype, "tutorDocenteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => docente_entity_1.Docente, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'tutor_docente_id' }),
    __metadata("design:type", docente_entity_1.Docente)
], Seccion.prototype, "tutorDocente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Seccion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Seccion.prototype, "updatedAt", void 0);
exports.Seccion = Seccion = __decorate([
    (0, typeorm_1.Entity)('secciones'),
    (0, typeorm_1.Unique)(['gradoId', 'anioEscolarId', 'nombre'])
], Seccion);
//# sourceMappingURL=seccion.entity.js.map