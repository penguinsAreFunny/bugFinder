"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionTree = void 0;
var fs = __importStar(require("fs"));
var child_process_1 = require("child_process");
var inversify_1 = require("inversify");
var path = __importStar(require("path"));
var DecisionTree = /** @class */ (function () {
    function DecisionTree() {
    }
    DecisionTree.prototype.train = function (dataset) {
        var pythonWd = path.join(__dirname, "python");
        var datasetPath = path.join(pythonWd, "dataset_5_5.json");
        fs.writeFileSync(datasetPath, JSON.stringify(dataset));
        var stdout1 = (0, child_process_1.execSync)("conda activate ./ml_env", { cwd: pythonWd });
        var stdout2 = (0, child_process_1.execSync)("python main.py " + datasetPath, { cwd: pythonWd });
        console.log(stdout1.toString());
        console.log(stdout2.toString());
        console.log("PythonWD: ", pythonWd);
        console.log("Datasetpath: ", datasetPath);
    };
    DecisionTree = __decorate([
        (0, inversify_1.injectable)()
    ], DecisionTree);
    return DecisionTree;
}());
exports.DecisionTree = DecisionTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjaXNpb25UcmVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2lzaW9uVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUNBQXdCO0FBQ3hCLCtDQUF1QztBQUN2Qyx1Q0FBcUM7QUFDckMseUNBQTRCO0FBRzVCO0lBQUE7SUFlQSxDQUFDO0lBZEcsNEJBQUssR0FBTCxVQUFNLE9BQWdCO1FBQ2xCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFFM0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBRXRELElBQU0sT0FBTyxHQUFHLElBQUEsd0JBQVEsRUFBQyx5QkFBeUIsRUFBQyxFQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO1FBQ25FLElBQU0sT0FBTyxHQUFHLElBQUEsd0JBQVEsRUFBQyxvQkFBa0IsV0FBYSxFQUFFLEVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFiUSxZQUFZO1FBRHhCLElBQUEsc0JBQVUsR0FBRTtPQUNBLFlBQVksQ0FleEI7SUFBRCxtQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLG9DQUFZIn0=