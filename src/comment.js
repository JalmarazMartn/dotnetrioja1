const vscode = require('vscode');

module.exports = {
    commentSelection: function () {commentSelection() }
}

function commentSelection() {
    const document = vscode.window.activeTextEditor.document;
    let selectionRange = new vscode.Range(vscode.window.activeTextEditor.selection.start,
        vscode.window.activeTextEditor.selection.end);
        
    for (let index = selectionRange.start.line; index <= selectionRange.end.line; index++) {
        const replaceRange = new vscode.Range(new vscode.Position(index,0),new vscode.Position(index,0));
        let edit = new vscode.WorkspaceEdit();
        const replaceText = '//';
        edit.replace(document.uri, replaceRange, replaceText);
        vscode.workspace.applyEdit(edit);    
    }
}
