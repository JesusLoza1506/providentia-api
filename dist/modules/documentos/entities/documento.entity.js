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
exports.Documento = void 0;
const typeorm_1 = require("typeorm");
const estudiante_entity_1 = require("../../estudiantes/entities/estudiante.entity");
let Documento = class Documento {
    id;
    estudianteId;
    estudiante;
    tipoDocumento;
    archivoUrl;
    fechaCarga;
    createdAt;
    updatedAt;
};
exports.Documento = Documento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Documento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estudiante_id', type: 'int' }),
    __metadata("design:type", Number)
], Documento.prototype, "estudianteId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estudiante_entity_1.Estudiante, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'estudiante_id' }),
    __metadata("design:type", estudiante_entity_1.Estudiante)
], Documento.prototype, "estudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_documento', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Documento.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'archivo_url', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Documento.prototype, "archivoUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_carga', type: 'timestamp' }),
    __metadata("design:type", Date)
], Documento.prototype, "fechaCarga", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Documento.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Documento.prototype, "updatedAt", void 0);
exports.Documento = Documento = __decorate([
    (0, typeorm_1.Entity)('documentos')
], Documento);
//# sourceMappingURL=documento.entity.js.map