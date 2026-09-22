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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const persona_entity_1 = require("../../personas/entities/persona.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
let Usuario = class Usuario {
    id;
    personaId;
    persona;
    rolId;
    rol;
    email;
    passwordHash;
    estado;
    mfaHabilitado;
    ultimoLogin;
    createdAt;
    updatedAt;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'persona_id', type: 'int', unique: true }),
    __metadata("design:type", Number)
], Usuario.prototype, "personaId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => persona_entity_1.Persona, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'persona_id' }),
    __metadata("design:type", persona_entity_1.Persona)
], Usuario.prototype, "persona", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rol_id', type: 'int' }),
    __metadata("design:type", Number)
], Usuario.prototype, "rolId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, { onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id' }),
    __metadata("design:type", role_entity_1.Role)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password_hash', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'activo' }),
    __metadata("design:type", String)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mfa_habilitado', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "mfaHabilitado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ultimo_login', type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "ultimoLogin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Usuario.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map