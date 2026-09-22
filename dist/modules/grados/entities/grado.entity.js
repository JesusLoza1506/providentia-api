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
exports.Grado = void 0;
const typeorm_1 = require("typeorm");
const nivel_entity_1 = require("../../niveles/entities/nivel.entity");
let Grado = class Grado {
    id;
    nivelId;
    nivel;
    nombre;
    numeroOrden;
    createdAt;
    updatedAt;
};
exports.Grado = Grado;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Grado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nivel_id', type: 'int' }),
    __metadata("design:type", Number)
], Grado.prototype, "nivelId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nivel_entity_1.Nivel, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'nivel_id' }),
    __metadata("design:type", nivel_entity_1.Nivel)
], Grado.prototype, "nivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Grado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_orden', type: 'smallint' }),
    __metadata("design:type", Number)
], Grado.prototype, "numeroOrden", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Grado.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Grado.prototype, "updatedAt", void 0);
exports.Grado = Grado = __decorate([
    (0, typeorm_1.Entity)('grados')
], Grado);
//# sourceMappingURL=grado.entity.js.map