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
exports.DocumentosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const documento_entity_1 = require("./entities/documento.entity");
let DocumentosService = class DocumentosService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return await this.repo.find({ relations: { estudiante: true } });
    }
    async findByEstudiante(estudianteId) {
        return await this.repo.find({
            where: { estudianteId },
            relations: { estudiante: true },
            order: { fechaCarga: 'DESC' },
        });
    }
    async findOne(id) {
        const item = await this.repo.findOne({
            where: { id },
            relations: { estudiante: true },
        });
        if (!item)
            throw new common_1.NotFoundException(`Documento con ID ${id} no encontrado`);
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
exports.DocumentosService = DocumentosService;
exports.DocumentosService = DocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(documento_entity_1.Documento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocumentosService);
//# sourceMappingURL=documentos.service.js.map