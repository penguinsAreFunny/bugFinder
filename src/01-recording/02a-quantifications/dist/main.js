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
        var dbConfig, factory, db, quantifier, locs, predQuantis, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    dbConfig = {
                        url: "mongodb://localhost:27017",
                        dbName: "TypeScript"
                    };
                    factory = inversify_config_1.container.get(bugfinder_framework_1.QUANTIFIER_TYPES.quantificationFactory);
                    db = factory.createDB();
                    quantifier = factory.createQuantifier();
                    return [4 /*yield*/, db.readLocalities("Preprocessed_Localities")];
                case 1:
                    locs = _a.sent();
                    return [4 /*yield*/, quantifier.quantify(locs, locs)];
                case 2:
                    predQuantis = _a.sent();
                    return [4 /*yield*/, db.writeQuantifications(predQuantis, "PredQuantifications_n10")
                        /*
                                const q0 = await db.readQuantifications("TestQuantis_v2")
                                const q1 = await db.readQuantifications("MissingQuantis13k")
                                const q2 = await db.readQuantifications("MissingQuantis14k")
                                const q3 = await db.readQuantifications("MissingQuantis15Bis18k")
                                const q4 = await db.readQuantifications("MissingQuantisSlice1000")
                                const q5 = await db.readQuantifications("MissingQuantisSlice1000To1500")
                                const q6 = await db.readQuantifications("MissingQuantisSlice1500To1881")
                                const allLocs = await db.readLocalities("CommitPaths-skip12146-n10000_v2")
                        
                                const test = (quantis: LocalityMap<CommitPath, any>) => {
                                    for(const el of quantis.toArray()){
                                        if(el.val.cognitiveComplexity != null){
                                            console.log("FOUND")
                                            return true
                                        }
                                    }
                                    return false
                                }
                        
                                if(test(q0)) console.log("q0")
                                if(test(q1)) console.log("q1")
                                if(test(q2)) console.log("q2")
                                if(test(q3)) console.log("q3")
                                if(test(q4)) console.log("q4")
                                if(test(q5)) console.log("q5")
                                if(test(q6)) console.log("q6")
                        
                                const allQuantis = new LocalityMap<CommitPath, any>()
                                allQuantis.push(q0)
                                allQuantis.push(q1)
                                allQuantis.push(q2)
                                allQuantis.push(q3)
                                allQuantis.push(q4)
                                allQuantis.push(q5)
                                allQuantis.push(q6)
                        
                                let x = 0
                                const locMap = new Map<string, boolean>()
                                const newAllQuantis = new LocalityMap<CommitPath, any>()
                                allLocs.forEach(loc => {
                                    const key = loc.commit.hash + loc.path.path
                                    locMap.set(key, true)
                        
                                    if(allQuantis.getVal(loc) == null){
                                        console.log(key)
                                        x++
                                    }else{
                                        newAllQuantis.set(loc, allQuantis.getVal(loc))
                                    }
                                })
                        
                                let y = 0
                                allQuantis.toArray().forEach(el => {
                                    const key = el.key.commit.hash + el.key.path.path
                                    if(!locMap.get(key)){
                                        console.log("\t", key)
                                        y++
                                    }
                                })
                        
                        
                                console.log("All quantis size: ", allQuantis.size())
                                console.log("Localities not quantified: ", x)
                                console.log("Quantifications not in localities: ", y)
                                console.log("New all quantis size: ", newAllQuantis.size())
                                await db.writeQuantifications(newAllQuantis, "Quantis_v5")
                                await db.writeLocalities(newAllQuantis.getLocalities(), "Localities_v5")*/
                        // await db.writeQuantifications(allQuantis, "TestQuantis_v4")
                        //  const predQuantis = await quantifier.quantify(locs, locs)
                    ];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log("ERROR: 02a-quantification: ", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
topLevelAwaitWrapper();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQTRDO0FBQzVDLDJEQUc2QjtBQVc3QixTQUFlLG9CQUFvQjs7Ozs7OztvQkFHckIsUUFBUSxHQUFrQjt3QkFDNUIsR0FBRyxFQUFFLDJCQUEyQjt3QkFDaEMsTUFBTSxFQUFFLFlBQVk7cUJBQ3ZCLENBQUE7b0JBR0ssT0FBTyxHQUFHLDRCQUFTLENBQUMsR0FBRyxDQUN6QixzQ0FBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO29CQUNyQyxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFBO29CQUN2QixVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUE7b0JBR2hDLHFCQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsRUFBQTs7b0JBQXpELElBQUksR0FBRyxTQUFrRDtvQkFDM0MscUJBQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUE7O29CQUFuRCxXQUFXLEdBQUcsU0FBcUM7b0JBQ3pELHFCQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUseUJBQXlCLENBQUM7d0JBRTdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBHQW1Fa0Y7d0JBRTFFLDhEQUE4RDt3QkFDOUQsNkRBQTZEO3NCQXhFUTs7b0JBQXJFLFNBQXFFLENBQUE7Ozs7b0JBMkVyRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLE9BQUssQ0FBQyxDQUFDOzs7Ozs7Q0FHekQ7QUFFRCxvQkFBb0IsRUFBRSxDQUFDIn0=