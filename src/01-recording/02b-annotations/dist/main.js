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
var bugfinder_localityrecorder_commitpath_1 = require("bugfinder-localityrecorder-commitpath");
function topLevelAwaitWrapper() {
    return __awaiter(this, void 0, void 0, function () {
        var annotationFactory, annotator, db, localities, logger, annotations, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    annotationFactory = inversify_config_1.container.get(bugfinder_framework_1.ANNOTATOR_TYPES.annotationFactory);
                    annotator = annotationFactory.createAnnotator();
                    db = annotationFactory.createDB();
                    return [4 /*yield*/, db.readLocalities("Preprocessed_Localities")];
                case 1:
                    localities = _a.sent();
                    logger = inversify_config_1.container.get(bugfinder_framework_1.SHARED_TYPES.logger);
                    bugfinder_localityrecorder_commitpath_1.CommitPath.logger = logger;
                    return [4 /*yield*/, annotator.annotate(localities, localities)];
                case 2:
                    annotations = _a.sent();
                    return [4 /*yield*/, db.writeAnnotations(annotations, "PostAnnotations_n3")];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log("ERROR: 02b-annotation: ", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
topLevelAwaitWrapper();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQTRDO0FBQzVDLDJEQUU2QjtBQUM3QiwrRkFBaUU7QUFJakUsU0FBZSxvQkFBb0I7Ozs7Ozs7b0JBR3JCLGlCQUFpQixHQUNuQiw0QkFBUyxDQUFDLEdBQUcsQ0FBd0MscUNBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO29CQUNyRixTQUFTLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ2hELEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFckIscUJBQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFBOztvQkFBL0QsVUFBVSxHQUFHLFNBQWtEO29CQUUvRCxNQUFNLEdBQUcsNEJBQVMsQ0FBQyxHQUFHLENBQVMsa0NBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDekQsa0RBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO29CQUVOLHFCQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFBOztvQkFBOUQsV0FBVyxHQUFHLFNBQWdEO29CQUNwRSxxQkFBTSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLEVBQUE7O29CQUE1RCxTQUE0RCxDQUFBOzs7O29CQUc1RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLE9BQUssQ0FBQyxDQUFDOzs7Ozs7Q0FHckQ7QUFFRCxvQkFBb0IsRUFBRSxDQUFDIn0=