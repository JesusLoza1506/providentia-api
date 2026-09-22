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
exports.Examen = void 0;
const typeorm_1 = require("typeorm");
const curso_virtual_entity_1 = require("../../cursos-virtuales/entities/curso-virtual.entity");
let Examen = class Examen {
    id;
    cursoVirtualId;
    cursoVirtual;
    titulo;
    tipo;
    duracionMinutos;
    fechaDisponibleDesde;
    fechaDisponibleHasta;
    puntajeMaximo;
    createdAt;
    updatedAt;
};
exports.Examen = Examen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Examen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_virtual_id', type: 'int' }),
    __metadata("design:type", Number)
], Examen.prototype, "cursoVirtualId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_virtual_entity_1.CursoVirtual, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_virtual_id' }),
    __metadata("design:type", curso_virtual_entity_1.CursoVirtual)
], Examen.prototype, "cursoVirtual", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Examen.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Examen.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'duracion_minutos', type: 'smallint' }),
    __metadata("design:type", Number)
], Examen.prototype, "duracionMinutos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_disponible_desde', type: 'timestamp' }),
    __metadata("design:type", Date)
], Examen.prototype, "fechaDisponibleDesde", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_disponible_hasta', type: 'timestamp' }),
    __metadata("design:type", Date)
], Examen.prototype, "fechaDisponibleHasta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'puntaje_maximo', type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Examen.prototype, "puntajeMaximo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Examen.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Examen.prototype, "updatedAt", void 0);
exports.Examen = Examen = __decorate([
    (0, typeorm_1.Entity)('examenes')
], Examen);
//# sourceMappingURL=examen.entity.js.map