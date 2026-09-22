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
exports.Persona = void 0;
const typeorm_1 = require("typeorm");
let Persona = class Persona {
    id;
    tipoDocumento;
    numeroDocumento;
    nombres;
    apellidoPaterno;
    apellidoMaterno;
    fechaNacimiento;
    sexo;
    direccion;
    telefono;
    emailContacto;
    fotoUrl;
    createdAt;
    updatedAt;
};
exports.Persona = Persona;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tipo_documento', type: 'varchar', length: 10 }),
    __metadata("design:type", String)
], Persona.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numero_documento', type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], Persona.prototype, "numeroDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Persona.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_paterno', type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], Persona.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_materno', type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_nacimiento', type: 'date' }),
    __metadata("design:type", Date)
], Persona.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email_contacto', type: 'varchar', length: 120, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "emailContacto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_url', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Persona.prototype, "fotoUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Persona.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Persona.prototype, "updatedAt", void 0);
exports.Persona = Persona = __decorate([
    (0, typeorm_1.Entity)('personas')
], Persona);
//# sourceMappingURL=persona.entity.js.map