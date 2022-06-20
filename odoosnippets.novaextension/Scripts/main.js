const csvJson = require("./snippets/csv_snippets.json");
const jsJson = require("./snippets/js_snippets.json");
const pythonJson = require("./snippets/python_snippets.json");
const xmlJson = require("./snippets/xml_snippets.json");

exports.activate = function () {
  // Do work when the extension is activated
  console.log("Hello, your odoo snippet extension is now active!");
};

exports.deactivate = function () {
  // Clean up state before the extension is deactivated
  console.log("Goodbye!");
};

class CSVProvider {
  constructor() {}

  provideCompletionItems(editor, context) {
    let snippets = [];

    for (let snippet in csvJson) {
      let item = new CompletionItem(
        csvJson[snippet].prefix,
        CompletionItemKind.Statement
      );

      item.documentation = csvJson[snippet].description;
      item.insertText = csvJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

class JSProvider {
  constructor() {}

  provideCompletionItems(editor, context) {
    let snippets = [];

    for (let snippet in jsJson) {
      let item = new CompletionItem(
        jsJson[snippet].prefix,
        CompletionItemKind.Statement
      );

      item.documentation = jsJson[snippet].description;
      item.insertText = jsJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

class PythonProvider {
  constructor() {}

  provideCompletionItems(editor, context) {
    let snippets = [];

    for (let snippet in pythonJson) {
      let item = new CompletionItem(
        pythonJson[snippet].prefix,
        CompletionItemKind.Statement
      );

      item.documentation = pythonJson[snippet].description;
      item.insertText = pythonJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

class XMLProvider {
  constructor() {}

  provideCompletionItems(editor, context) {
    let snippets = [];

    for (let snippet in xmlJson) {
      let item = new CompletionItem(
        xmlJson[snippet].prefix,
        CompletionItemKind.Statement
      );

      item.documentation = xmlJson[snippet].description;
      item.insertText = xmlJson[snippet].body.join("\n");
      item.insertTextFormat = InsertTextFormat.Snippet;

      snippets.push(item);
    }

    return snippets;
  }
}

nova.assistants.registerCompletionAssistant("csv", new CSVProvider());
nova.assistants.registerCompletionAssistant(
  ["javascript", "js"],
  new JSProvider()
);
nova.assistants.registerCompletionAssistant(
  ["python", "py"],
  new PythonProvider()
);
nova.assistants.registerCompletionAssistant("xml", new XMLProvider());
