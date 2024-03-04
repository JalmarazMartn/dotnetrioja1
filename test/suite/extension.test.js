const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
	test('Write document', async () => {
		const newText = 'console.log(1);';
		let doc = await vscode.workspace.openTextDocument();
		await addTextToDocument(doc, newText,0,0);		
		const comment = require('./../../src/comment.js');
		const commentOperator = '//';
		await comment.commentRangeInDoc(new vscode.Range(0,0,0,20),doc);
		//await comment.commentSelection();
		assert.strictEqual(commentOperator+newText,doc.lineAt(0).text);
	})
});
async function addTextToDocument(doc, newText,line=0,column=0) {
	let edit = new vscode.WorkspaceEdit();
	edit.insert(doc.uri, new vscode.Position(line, column), newText);
	await vscode.workspace.applyEdit(edit);
}

