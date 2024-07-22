"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openAllTerminals', () => {
        const terminals = [
            { name: 'IdentityService', command: 'cd .\\src\\IdentityService; dotnet watch' },
            { name: 'GatewayService', command: 'cd .\\src\\GatewayService; dotnet watch' },
            { name: 'AuctionService', command: 'cd .\\src\\AuctionService; dotnet watch' },
            { name: 'SearchService', command: 'cd .\\src\\SearchService; dotnet watch' },
            { name: 'BiddingService', command: 'cd .\\src\\BiddingService; dotnet watch' },
            { name: 'NotificationService', command: 'cd .\\src\\NotificationService; dotnet watch' },
            { name: 'ChatService', command: 'cd .\\src\\ChatService; dotnet watch' },
            { name: 'NextJsFrontend', command: 'cd .\\frontend\\web-app; npm run dev' }
        ];
        terminals.forEach(terminalInfo => {
            const terminal = vscode.window.createTerminal(terminalInfo.name);
            terminal.sendText(terminalInfo.command);
            terminal.show();
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map