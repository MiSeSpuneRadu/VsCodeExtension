import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}
