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
exports.Tarea = void 0;
const typeorm_1 = require("typeorm");
const curso_virtual_entity_1 = require("../../cursos-virtuales/entities/curso-virtual.entity");
let Tarea = class Tarea {
    id;
    cursoVirtualId;
    cursoVirtual;
    titulo;
    descripcion;
    fechaEntrega;
    puntajeMaximo;
    createdAt;
    updatedAt;
};
exports.Tarea = Tarea;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tarea.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_virtual_id', type: 'int' }),
    __metadata("design:type", Number)
], Tarea.prototype, "cursoVirtualId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_virtual_entity_1.CursoVirtual, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_virtual_id' }),
    __metadata("design:type", curso_virtual_entity_1.CursoVirtual)
], Tarea.prototype, "cursoVirtual", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Tarea.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Tarea.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_entrega', type: 'timestamp' }),
    __metadata("design:type", Date)
], Tarea.prototype, "fechaEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'puntaje_maximo', type: 'decimal', precision: 5, scale: 2, default: 20.00 }),
    __metadata("design:type", Number)
], Tarea.prototype, "puntajeMaximo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Tarea.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Tarea.prototype, "updatedAt", void 0);
exports.Tarea = Tarea = __decorate([
    (0, typeorm_1.Entity)('tareas')
], Tarea);
//# sourceMappingURL=tarea.entity.js.map