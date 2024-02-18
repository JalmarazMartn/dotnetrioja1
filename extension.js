// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposableOpenRegexHelp = vscode.commands.registerCommand('dotnetrioja1.openRegexHelp', function () {
		const regexHelpURL = 'https://regex101.com/';
		vscode.env.openExternal(vscode.Uri.parse(regexHelpURL));
	});
	context.subscriptions.push(disposableOpenRegexHelp);

	let disposableCommentBlock = vscode.commands.registerCommand('dotnetrioja1.CommentBlock', function () {
		const commentModule = require('./src/comment');
		commentModule.commentSelection();
	});
	context.subscriptions.push(disposableCommentBlock);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
