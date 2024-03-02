# flyway-migration-helper README

## Features

The "flyway-migration-helper" is a Visual Studio Code extension designed to streamline the process of creating Flyway migration files. It provides a context menu command that allows you to create a new migration file with a name based on your input and the current timestamp, formatted as yyyyMMddHHmmss.

The extension ensures that the file name is sanitized by replacing spaces with underscores, reducing multiple spaces to a single one, and converting the name to lowercase. This helps maintain a consistent and clean naming convention for your migration files.

Here's how to use it:

Right-click on the folder where you want to create the migration file.
Select the "Create Migration" command.
Enter the name of the migration in the input box that appears.
The extension will create a new .sql file in the selected folder with a name in the format VyyyyMMddHHmmss\_\_your_migration_name.sql.

\!\[feature X\]\(screenshot_of_context_menu.png\)

## Requirements

There are no specific requirements or dependencies for this extension.If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

- `myExtension.enable`: Enable/disable this extension.
- `myExtension.thing`: Set to `blah` to do something.

## Known Issues

There are no known issues at the moment.

## Release Notes

### 1.0.0

Initial release of flyway-migration-helper.

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

- [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

### LICENSE

MIT

**Enjoy!**
