import { ExtensionContext, languages, window, workspace } from 'vscode';

export function activate(context: ExtensionContext) {
	context.subscriptions.push(workspace.onDidOpenTextDocument(v => {
		const ext = v.uri.path.match(/(?<=\.)[^./\\]*?$/)?.pop() ?? '';
		if (ext === 'mcfunction' && window.activeTextEditor) {
			languages.setTextDocumentLanguage(window.activeTextEditor.document, 'mcfunction');
		}
	}));
}

export function deactivate() { }
