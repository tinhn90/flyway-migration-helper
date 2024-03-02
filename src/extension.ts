import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "flyway-migration-helper" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('flyway-migration-helper.createMigration', async (folder: vscode.Uri) => {
		const name = await vscode.window.showInputBox({ prompt: 'Enter the name of the migration' });

		if (name) {
			const sanitized_name = name.replace(/\s+/g, ' ').trim().replace(/ /g, '_').toLowerCase();
			const fileName = 'V' + formatDate(new Date()) + '__' + sanitized_name + '.sql';
			const uri = vscode.Uri.file(path.join(folder.fsPath, fileName));
			await vscode.workspace.fs.writeFile(uri, new Uint8Array());

			vscode.window.showInformationMessage(`File ${fileName} created.`);
		}
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(disposable);
}

function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');

	return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

// This method is called when your extension is deactivated
export function deactivate() { }
