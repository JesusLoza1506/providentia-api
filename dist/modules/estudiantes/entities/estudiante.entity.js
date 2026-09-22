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
exports.Estudiante = void 0;
const typeorm_1 = require("typeorm");
const persona_entity_1 = require("../../personas/entities/persona.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Estudiante = class Estudiante {
    id;
    personaId;
    persona;
    usuarioId;
    usuario;
    codigoEstudiante;
    codigoSiagie;
    estado;
    createdAt;
    updatedAt;
};
exports.Estudiante = Estudiante;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estudiante.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'persona_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Estudiante.prototype, "personaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => persona_entity_1.Persona, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'persona_id' }),
    __metadata("design:type", persona_entity_1.Persona)
], Estudiante.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'int', nullable: true, unique: true }),
    __metadata("design:type", Number)
], Estudiante.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.Usuario, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Estudiante.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_estudiante', type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "codigoEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_siagie', type: 'varchar', length: 20, unique: true, nullable: true }),
    __metadata("design:type", String)
], Estudiante.prototype, "codigoSiagie", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'activo' }),
    __metadata("design:type", String)
], Estudiante.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Estudiante.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Estudiante.prototype, "updatedAt", void 0);
exports.Estudiante = Estudiante = __decorate([
    (0, typeorm_1.Entity)('estudiantes')
], Estudiante);
//# sourceMappingURL=estudiante.entity.js.map