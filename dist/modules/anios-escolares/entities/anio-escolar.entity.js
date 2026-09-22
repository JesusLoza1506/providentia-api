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
exports.AnioEscolar = void 0;
const typeorm_1 = require("typeorm");
let AnioEscolar = class AnioEscolar {
    id;
    anio;
    fechaInicio;
    fechaFin;
    estado;
    createdAt;
    updatedAt;
};
exports.AnioEscolar = AnioEscolar;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AnioEscolar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unique: true }),
    __metadata("design:type", Number)
], AnioEscolar.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_inicio', type: 'date' }),
    __metadata("design:type", Date)
], AnioEscolar.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_fin', type: 'date' }),
    __metadata("design:type", Date)
], AnioEscolar.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, default: 'planificacion' }),
    __metadata("design:type", String)
], AnioEscolar.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AnioEscolar.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AnioEscolar.prototype, "updatedAt", void 0);
exports.AnioEscolar = AnioEscolar = __decorate([
    (0, typeorm_1.Entity)('anios_escolares')
], AnioEscolar);
//# sourceMappingURL=anio-escolar.entity.js.map