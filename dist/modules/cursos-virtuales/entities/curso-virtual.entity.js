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
exports.CursoVirtual = void 0;
const typeorm_1 = require("typeorm");
const curso_docente_seccion_entity_1 = require("../../curso-docente-seccion/entities/curso-docente-seccion.entity");
let CursoVirtual = class CursoVirtual {
    id;
    cursoDocenteSeccionId;
    cursoDocenteSeccion;
    descripcion;
    bannerUrl;
    createdAt;
    updatedAt;
};
exports.CursoVirtual = CursoVirtual;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CursoVirtual.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_docente_seccion_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], CursoVirtual.prototype, "cursoDocenteSeccionId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => curso_docente_seccion_entity_1.CursoDocenteSeccion, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_docente_seccion_id' }),
    __metadata("design:type", curso_docente_seccion_entity_1.CursoDocenteSeccion)
], CursoVirtual.prototype, "cursoDocenteSeccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], CursoVirtual.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'banner_url', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], CursoVirtual.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CursoVirtual.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CursoVirtual.prototype, "updatedAt", void 0);
exports.CursoVirtual = CursoVirtual = __decorate([
    (0, typeorm_1.Entity)('cursos_virtuales')
], CursoVirtual);
//# sourceMappingURL=curso-virtual.entity.js.map