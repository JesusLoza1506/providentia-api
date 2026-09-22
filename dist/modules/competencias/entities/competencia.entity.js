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
exports.Competencia = void 0;
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("../../cursos/entities/curso.entity");
let Competencia = class Competencia {
    id;
    cursoId;
    curso;
    nombre;
    descripcion;
    createdAt;
    updatedAt;
};
exports.Competencia = Competencia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Competencia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_id', type: 'int' }),
    __metadata("design:type", Number)
], Competencia.prototype, "cursoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.Curso, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", curso_entity_1.Curso)
], Competencia.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Competencia.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Competencia.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Competencia.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Competencia.prototype, "updatedAt", void 0);
exports.Competencia = Competencia = __decorate([
    (0, typeorm_1.Entity)('competencias')
], Competencia);
//# sourceMappingURL=competencia.entity.js.map