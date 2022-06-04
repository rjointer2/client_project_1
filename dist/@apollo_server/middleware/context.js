"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.SECRET;
const expiration = '2h';
function middleware({ req, res }) {
    return {
        authorize: (user) => {
            const token = jsonwebtoken_1.default.sign({ data: user }, secret);
            req.session.token = token;
        },
        authenticate: () => {
            const token = req.session.token;
            if (!token)
                return null;
            const decodedStep1 = token.split(' ').pop();
            if (!decodedStep1)
                return null;
            const decodedStep2 = decodedStep1.trim();
            const { data } = jsonwebtoken_1.default.verify(decodedStep2, secret);
            console.log(data);
            return data;
        }
    };
}
exports.default = middleware;
