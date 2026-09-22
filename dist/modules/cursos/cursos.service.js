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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const curso_entity_1 = require("./entities/curso.entity");
let CursosService = class CursosService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return await this.repo.find({
            relations: { nivel: true },
            order: { nombre: 'ASC' },
        });
    }
    async findByNivel(nivelId) {
        return await this.repo.find({
            where: { nivelId },
            relations: { nivel: true },
            order: { nombre: 'ASC' },
        });
    }
    async findOne(id) {
        const item = await this.repo.findOne({
            where: { id },
            relations: { nivel: true },
        });
        if (!item) {
            throw new common_1.NotFoundException(`Curso con ID ${id} no encontrado`);
        }
        return item;
    }
    async create(data) {
        const newItem = this.repo.create(data);
        return await this.repo.save(newItem);
    }
    async update(id, data) {
        const item = await this.findOne(id);
        Object.assign(item, data);
        return await this.repo.save(item);
    }
    async remove(id) {
        const item = await this.findOne(id);
        await this.repo.remove(item);
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(curso_entity_1.Curso)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CursosService);
//# sourceMappingURL=cursos.service.js.map