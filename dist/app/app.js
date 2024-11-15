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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const userRouter = express_1.default.Router();
app.use("/api/v1/", userRouter);
userRouter.get("/user-router", (req, res, next) => {
    console.log("Hello Halima Sadia form World");
    try {
        res.send(hllo);
    }
    catch (err) {
        next(err);
    }
});
const logger = (req, res, next) => {
    console.log({ url: req.url, method: req.method });
    next();
};
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(sdfjdfk);
    }
    catch (err) {
        next(err);
    }
}));
app.use((error, req, res, next) => {
    console.log(error);
    res.send({
        success: false,
        message: "Something Went Wrong!"
    });
});
exports.default = app;
