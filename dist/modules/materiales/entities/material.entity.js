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
exports.Material = void 0;
const typeorm_1 = require("typeorm");
const curso_virtual_entity_1 = require("../../cursos-virtuales/entities/curso-virtual.entity");
let Material = class Material {
    id;
    cursoVirtualId;
    cursoVirtual;
    titulo;
    tipo;
    url;
    fechaPublicacion;
    createdAt;
    updatedAt;
};
exports.Material = Material;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'curso_virtual_id', type: 'int' }),
    __metadata("design:type", Number)
], Material.prototype, "cursoVirtualId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_virtual_entity_1.CursoVirtual, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'curso_virtual_id' }),
    __metadata("design:type", curso_virtual_entity_1.CursoVirtual)
], Material.prototype, "cursoVirtual", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Material.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Material.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Material.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_publicacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Material.prototype, "fechaPublicacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Material.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Material.prototype, "updatedAt", void 0);
exports.Material = Material = __decorate([
    (0, typeorm_1.Entity)('materiales')
], Material);
//# sourceMappingURL=material.entity.js.map