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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var bugfinder_framework_1 = require("bugfinder-framework");
var commitPath_1 = require("./commitPath");
var underscore_1 = __importDefault(require("underscore"));
function topLevelAwaitWrapper() {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function () {
        var localityRecorder, db, allLocalities, localities, log, newlocs, preds, predsArray, map, predsArray_1, predsArray_1_1, pred, predsArray_2, predsArray_2_1, pred, curVal, i, _g, _h, key, x, map2, predsArray_3, predsArray_3_1, pred, i_1, p, key, error_1;
        var e_1, _j, e_2, _k, e_3, _l, e_4, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _o.trys.push([0, 3, , 4]);
                    localityRecorder = inversify_config_1.container.get(bugfinder_framework_1.LOCALITY_RECORDING_TYPES.localityRecorder);
                    db = inversify_config_1.container.get(bugfinder_framework_1.LOCALITY_RECORDING_TYPES.db);
                    return [4 /*yield*/, db.readLocalities("CommitPaths")];
                case 1:
                    allLocalities = _o.sent();
                    return [4 /*yield*/, db.readLocalities("CommitPaths-skip12146-n10000_v2")];
                case 2:
                    localities = _o.sent();
                    log = function (locs) {
                        locs.forEach(function (loc) {
                            console.log(loc.commit.hash, " ", loc.path.path, " ", loc.commit.order);
                        });
                    };
                    commitPath_1.CommitPath.setPredecessorDelegation(new commitPath_1.PredecessorsUnique());
                    newlocs = underscore_1.default.sortBy(localities, function (el) {
                        return -el.commit.order;
                    });
                    preds = commitPath_1.CommitPath.getNPredecessorsMap(newlocs, 5, true, newlocs);
                    predsArray = preds.toArray().map(function (el) {
                        return el.val;
                    });
                    map = new Map();
                    try {
                        for (predsArray_1 = __values(predsArray), predsArray_1_1 = predsArray_1.next(); !predsArray_1_1.done; predsArray_1_1 = predsArray_1.next()) {
                            pred = predsArray_1_1.value;
                            map.set((_b = (_a = pred[0]) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b.path, 0);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (predsArray_1_1 && !predsArray_1_1.done && (_j = predsArray_1.return)) _j.call(predsArray_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    try {
                        for (predsArray_2 = __values(predsArray), predsArray_2_1 = predsArray_2.next(); !predsArray_2_1.done; predsArray_2_1 = predsArray_2.next()) {
                            pred = predsArray_2_1.value;
                            curVal = map.get((_d = (_c = pred[0]) === null || _c === void 0 ? void 0 : _c.path) === null || _d === void 0 ? void 0 : _d.path);
                            map.set((_f = (_e = pred[0]) === null || _e === void 0 ? void 0 : _e.path) === null || _f === void 0 ? void 0 : _f.path, curVal + 1);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (predsArray_2_1 && !predsArray_2_1.done && (_k = predsArray_2.return)) _k.call(predsArray_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    i = 0;
                    try {
                        for (_g = __values(map.keys()), _h = _g.next(); !_h.done; _h = _g.next()) {
                            key = _h.value;
                            console.log(key, " ", map.get(key));
                            i++;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_h && !_h.done && (_l = _g.return)) _l.call(_g);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    x = 0;
                    map2 = new Map();
                    try {
                        for (predsArray_3 = __values(predsArray), predsArray_3_1 = predsArray_3.next(); !predsArray_3_1.done; predsArray_3_1 = predsArray_3.next()) {
                            pred = predsArray_3_1.value;
                            for (i_1 = 0; i_1 < pred.length; i_1++) {
                                p = pred[i_1];
                                key = p.commit.hash + p.path.path;
                                if (map2.get(key) == 1) {
                                    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Duplicate found! " + key + " i");
                                    x++;
                                }
                                map2.set(key, 1);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (predsArray_3_1 && !predsArray_3_1.done && (_m = predsArray_3.return)) _m.call(predsArray_3);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    console.log("Duplicates: ", x);
                    console.log("Total unique files with n preds: ", i);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _o.sent();
                    console.log("ERROR: 01a-locality: ", error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
topLevelAwaitWrapper();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUEwQjtBQUMxQix1REFBNEM7QUFDNUMsMkRBQW1GO0FBQ25GLDJDQUFnRjtBQUVoRiwwREFBMEI7QUFFMUIsU0FBZSxvQkFBb0I7Ozs7Ozs7OztvQkFJckIsZ0JBQWdCLEdBQUcsNEJBQVMsQ0FBQyxHQUFHLENBQStCLDhDQUF3QixDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQzFHLEVBQUUsR0FBRyw0QkFBUyxDQUFDLEdBQUcsQ0FBMkIsOENBQXdCLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRTFELHFCQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUE7O29CQUF0RCxhQUFhLEdBQUcsU0FBc0M7b0JBQ3pDLHFCQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUNBQWlDLENBQUMsRUFBQTs7b0JBQXZFLFVBQVUsR0FBRyxTQUEwRDtvQkFHdkUsR0FBRyxHQUFHLFVBQUMsSUFBa0I7d0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHOzRCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUMzRSxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUE7b0JBRUQsdUJBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLCtCQUFrQixFQUFFLENBQUMsQ0FBQTtvQkFDekQsT0FBTyxHQUFHLG9CQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxVQUFDLEVBQUU7d0JBQ2xDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtvQkFDM0IsQ0FBQyxDQUFDLENBQUE7b0JBQ0ksS0FBSyxHQUFHLHVCQUFVLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7b0JBQ2pFLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRTt3QkFDckMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFBO29CQUNqQixDQUFDLENBQUMsQ0FBQTtvQkFDSSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUE7O3dCQUNyQyxLQUFtQixlQUFBLFNBQUEsVUFBVSxDQUFBLG9HQUFFOzRCQUFwQixJQUFJOzRCQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBQSxNQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSwwQ0FBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7eUJBQ2xDOzs7Ozs7Ozs7O3dCQUVELEtBQW1CLGVBQUEsU0FBQSxVQUFVLENBQUEsb0dBQUU7NEJBQXBCLElBQUk7NEJBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBQSxNQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsMENBQUUsSUFBSSwwQ0FBRSxJQUFJLENBQUMsQ0FBQTs0QkFDM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFBLE1BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxJQUFJLDBDQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7eUJBQzNDOzs7Ozs7Ozs7b0JBRUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs7d0JBQ1QsS0FBa0IsS0FBQSxTQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQSw0Q0FBRTs0QkFBbkIsR0FBRzs0QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOzRCQUNuQyxDQUFDLEVBQUUsQ0FBQTt5QkFDTjs7Ozs7Ozs7O29CQUVHLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ0gsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFBOzt3QkFFdEMsS0FBbUIsZUFBQSxTQUFBLFVBQVUsQ0FBQSxvR0FBRTs0QkFBcEIsSUFBSTs0QkFDWCxLQUFTLE1BQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxFQUFFO2dDQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFBO2dDQUNYLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtnQ0FDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQ0FDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2REFBNkQsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUE7b0NBQ3ZGLENBQUMsRUFBRSxDQUFBO2lDQUNOO2dDQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBOzZCQUNuQjt5QkFDSjs7Ozs7Ozs7O29CQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O29CQVFuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLE9BQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O0NBRzNEO0FBRUQsb0JBQW9CLEVBQUUsQ0FBQyJ9