"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var bugfinder_framework_1 = require("bugfinder-framework");
function topLevelAwaitWrapper() {
    return __awaiter(this, void 0, void 0, function () {
        var preprocessingFactory, preprocessor, db, quantifications, annotations, dataset, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    preprocessingFactory = inversify_config_1.container
                        .get(bugfinder_framework_1.PREPROCESSING_TYPES.preprocessingFactory);
                    preprocessor = preprocessingFactory.createPreprocessor();
                    db = preprocessingFactory.createDB();
                    return [4 /*yield*/, db.readQuantifications("PredQuantifications_n10")];
                case 1:
                    quantifications = _a.sent();
                    return [4 /*yield*/, db.readAnnotations("PostAnnotations_n10")];
                case 2:
                    annotations = _a.sent();
                    return [4 /*yield*/, preprocessor.preprocess(quantifications, annotations)];
                case 3:
                    dataset = _a.sent();
                    return [4 /*yield*/, db.writeDataset("DatasetAP_predQuanti_postAnno_10_10", dataset)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.log("ERROR: ", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
topLevelAwaitWrapper();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQTRDO0FBQzVDLDJEQUU2QjtBQUk3QixTQUFlLG9CQUFvQjs7Ozs7OztvQkFHckIsb0JBQW9CLEdBQUcsNEJBQVM7eUJBQ2pDLEdBQUcsQ0FDQSx5Q0FBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUU1QyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtvQkFDeEQsRUFBRSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUNsQixxQkFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsRUFBQTs7b0JBQXpFLGVBQWUsR0FBRyxTQUF1RDtvQkFDM0QscUJBQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFBOztvQkFBN0QsV0FBVyxHQUFHLFNBQStDO29CQUNuRCxxQkFBTSxZQUFZLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsRUFBQTs7b0JBQXJFLE9BQU8sR0FBRyxTQUEyRDtvQkFDM0UscUJBQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsRUFBRSxPQUFPLENBQUMsRUFBQTs7b0JBQXJFLFNBQXFFLENBQUE7Ozs7b0JBR3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQUssQ0FBQyxDQUFDOzs7Ozs7Q0FHckM7QUFFRCxvQkFBb0IsRUFBRSxDQUFDIn0=