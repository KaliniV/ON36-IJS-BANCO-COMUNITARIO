"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerentesModule = void 0;
const common_1 = require("@nestjs/common");
const gerentes_service_1 = require("./gerentes.service");
const gerentes_controller_1 = require("./gerentes.controller");
const clientes_module_1 = require("../clientes/clientes.module");
let GerentesModule = class GerentesModule {
};
exports.GerentesModule = GerentesModule;
exports.GerentesModule = GerentesModule = __decorate([
    (0, common_1.Module)({
        imports: [clientes_module_1.ClientesModule],
        providers: [gerentes_service_1.GerentesService],
        controllers: [gerentes_controller_1.GerentesController],
    })
], GerentesModule);
//# sourceMappingURL=gerentes.module.js.map