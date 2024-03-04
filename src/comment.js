const vscode = require('vscode');

module.exports = {
    commentSelection: async function () {await commentSelection() },
    commentRangeInDoc: async function (selectionRange,document) {await commentRangeInDoc(selectionRange,document) }
}

async function commentSelection() {
    const document = vscode.window.activeTextEditor.document;
    let selectionRange = new vscode.Range(vscode.window.activeTextEditor.selection.start,
        vscode.window.activeTextEditor.selection.end);
    await commentRangeInDoc(selectionRange, document);
}
async function commentRangeInDoc(selectionRange, document) {
    for (let index = selectionRange.start.line; index <= selectionRange.end.line; index++) {
        const replaceRange = new vscode.Range(new vscode.Position(index, 0), new vscode.Position(index, 0));
        let edit = new vscode.WorkspaceEdit();
        const replaceText = '//';
        edit.replace(document.uri, replaceRange, replaceText);
        await vscode.workspace.applyEdit(edit);
    }
}

