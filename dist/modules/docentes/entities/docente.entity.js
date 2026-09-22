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
exports.Docente = void 0;
const typeorm_1 = require("typeorm");
const persona_entity_1 = require("../../personas/entities/persona.entity");
const usuario_entity_1 = require("../../usuarios/entities/usuario.entity");
let Docente = class Docente {
    id;
    personaId;
    persona;
    usuarioId;
    usuario;
    codigoDocente;
    especialidad;
    condicionLaboral;
    createdAt;
    updatedAt;
};
exports.Docente = Docente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Docente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'persona_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Docente.prototype, "personaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => persona_entity_1.Persona, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'persona_id' }),
    __metadata("design:type", persona_entity_1.Persona)
], Docente.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuario_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Docente.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_entity_1.Usuario, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Docente.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'codigo_docente', type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], Docente.prototype, "codigoDocente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'condicion_laboral', type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Docente.prototype, "condicionLaboral", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Docente.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Docente.prototype, "updatedAt", void 0);
exports.Docente = Docente = __decorate([
    (0, typeorm_1.Entity)('docentes')
], Docente);
//# sourceMappingURL=docente.entity.js.map