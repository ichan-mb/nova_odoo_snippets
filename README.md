<h1 align="center">
	<div>Odoo Snippets</div>
</h1>

This extension contains predefined code snippets for [Odoo](https://www.odoo.com/) developer. Snippets are available for following supported languages (file extensions):

- Python (`.py`)
- Javascript (`.js`)
- XML (`.xml`)
- CSV (`.csv`)

All snippets follow the [Odoo Guidelines](https://www.odoo.com/documentation/15.0/reference/guidelines.html).

## How to use?

Snippets prefixes are defined in documentation. Type prefix and select snippet from the suggestion list.

For example if you want to add `create` CRUD method then type `oocreate`.

<img src="https://raw.githubusercontent.com/droggol/VscOdooSnippets/master/images/demo.gif" width="624" height="544"/>

## Documentation

#### Python (`.py`)

| Prefix          | Purpose                      |
| --------------- | ---------------------------- |
| `manifest`      | Manifest JSON                |
| `imo`           | Import Odoo Model/Fields/API |
| `ime`           | Import Odoo Exceptions       |
| `iml`           | Import Logging               |
| `imf`           | Import From                  |
| `oomodel`       | Add model                    |
| `oofchar`       | Char Field                   |
| `ooftext`       | Text Field                   |
| `oofhtml`       | Html Field                   |
| `oofboolean`    | Boolean Field                |
| `oofinteger`    | Integer Field                |
| `ooffloat`      | Float Field                  |
| `oofselection`  | Selection Field              |
| `oofdate`       | Date Field                   |
| `oofdatetime`   | DateTime Field               |
| `oofimage`      | Image Field                  |
| `oofbinary`     | Binary Field                 |
| `oofmonetary`   | Monetary Field               |
| `oofmany2one`   | Many2one Field               |
| `oofone2many`   | One2many Field               |
| `oofmany2many`  | Many2many Field              |
| `oofcompute`    | Compute Field                |
| `oofcomputei`   | Compute Field with Inverse   |
| `oofonchange`   | Onchange Field               |
| `oofconstrains` | Constrains                   |
| `ooone`         | Ensure One                   |
| `oooverride`    | Override Method              |
| `oocreate`      | Create Method                |
| `oowrite`       | Write Method                 |
| `oounlink`      | Unlink Method                |
| `related`       | Related Attribute            |
| `required`      | Required Attribute           |
| `readonly`      | Readonly Attribute           |
| `copy`          | Copy Attribute               |
| `store`         | Store Attribute              |
| `digits`        | Digits Attribute             |
| `help`          | Help Attribute               |
| `check_company` | Check Company Attribute      |

#### XML (`.xml`)

| Prefix              | Purpose                    |
| ------------------- | -------------------------- |
| `<odoo>`            | Odoo Namespace             |
| `<data>`            | Data Tag                   |
| `<menuitem>`        | Root Menu                  |
| `<menuitem>`        | Submenu                    |
| `<form>`            | Form View                  |
| `<tree>`            | Tree View                  |
| `<kanban>`          | Kanban View                |
| `<search>`          | Search View                |
| `<calendar>`        | Calendar View              |
| `<cohort>`          | Cohort View                |
| `<gantt>`           | Gantt View                 |
| `<graph>`           | Graph View                 |
| `<pivot>`           | Pivot View                 |
| `<activity>`        | Activity View              |
| `<qweb>`            | Qweb View                  |
| `<viewInherit>`     | Inherit View               |
| `<buttonHeader>`    | Button in Form View Header |
| `<buttonBox>`       | Stat Button Container      |
| `<buttonStat>`      | Stat Button                |
| `<field>`           | Field Tag                  |
| `<filter>`          | Filter in Search View      |
| `<notebook>`        | Notebook                   |
| `<page>`            | Notebook Page              |
| `<chatter>`         | Chatter                    |
| `<action>`          | Action                     |
| `<actionView>`      | View in Action             |
| `<actionServer>`    | Server Action              |
| `<actionUrl>`       | URL action                 |
| `<actionClient>`    | Client Action              |
| `<actionReport>`    | Report Action              |
| `<report>`          | Report Template            |
| `<cron>`            | Cron                       |
| `<record>`          | Record                     |
| `<function>`        | Function                   |
| `<template>`        | Template                   |
| `<templateInherit>` | Inherit Template           |
| `<xpath>`           | Xpath                      |
| `<xpathAttr>`       | Xpath to Attributes        |
| `<xpathField>`      | Xpath for Field            |
| `<attribute>`       | Attribute for Xpath        |
| `<group>`           | Group                      |
| `<script>`          | Script                     |
| `<link>`            | SCSS Link                  |
| `<assetsBackend>`   | Backend Assets             |
| `<assetsFrontend>`  | Frontend Assets            |

#### Qweb

| Prefix        | Purpose                   |
| ------------- | ------------------------- |
| `<t-if>`      | If Condition              |
| `<t-if-else>` | If Else Condition         |
| `<t-foreach>` | Foreach Loop              |
| `<t-set>`     | Set Variable              |
| `<t-esc>`     | Evaluate Expression       |
| `<t-out>`     | Evaluate Expression       |
| `<t-raw>`     | Evaluate Html Content     |
| `<t-call>`    | Call Other Template       |
| `<t-debug>`   | Invokes a Debugger        |
| `<t-log>`     | Log the Expression Result |
| `t-att`       | t-att                     |
| `t-attf`      | t-attf                    |

#### Python and XML (`.py` and `.xml`)

| Prefix   | Purpose     |
| -------- | ----------- |
| `ooleaf` | Domain Leaf |

#### CSV (`.csv`)

| Prefix      | Purpose          |
| ----------- | ---------------- |
| `oocolumns` | Columns          |
| `ooaccess`  | Access for Model |

#### Javascript (`.js`)

| Prefix        | Purpose                       |
| ------------- | ----------------------------- |
| `odoo-module` | Define Odoo Module            |
| `imc`         | Import Component              |
| `imcs`        | Import Component and useState |
| `oc`          | Component                     |
| `occ`         | Component with Constructor    |
| `ocs`         | Component with Setup          |
| `ms`          | Setup                         |
| `mws`         | willStart                     |
| `mm`          | mounted                       |
| `mwup`        | willUpdateProps               |
| `mwp`         | willPatch                     |
| `mp`          | patched                       |
| `mwum`        | willUnmount                   |
| `mce`         | catchError                    |
| `uss`         | useState                      |
| `usr`         | useRef                        |
| `usc`         | useContext                    |
| `ust`         | useStore                      |
| `usd`         | useDispatch                   |
| `onm`         | onMounted                     |
| `onwn`        | onWillUnmount                 |
| `onwp`        | onWillPatch                   |
| `onp`         | onPatched                     |
| `ows`         | onWillStart                   |
| `owup`        | onWillUpdateProps             |

## Full Expansions

#### `odoo-module` - Define Odoo Module

```javascript
/** @odoo-module **/
```

#### `imc` - Import Component

```javascript
const { Component } = owl;
```

#### `imcs` - Import Component and useState

```javascript
const { Component } = owl;
const { useState } = owl.hooks;
```

#### `oc` - Component

```javascript
export class MyComponent extends Component {}
```

#### `occ` - Component with Constructor

```javascript
export class MyComponent extends Component {
  constructor(...args) {
    super(...args);
  }
}
```

#### `ocs` - Component with Setup

```javascript
export class MyComponent extends Component {
  setup() {
    super.setup();
  }
}
```

#### `ms` - Setup

```javascript
setup() {
	super.setup();
}
```

#### `mws` - willStart

```javascript
async willStart() { }
```

#### `mm` - mounted

```javascript
mounted() { }
```

#### `mwup` - willUpdateProps

```javascript
async willUpdateProps(nextProps) { }
```

#### `mwp` - willPatch

```javascript
willPatch() { }
```

#### `mp` - patched

```javascript
patched() { }
```

#### `mwum` - willUnmount

```javascript
willUnmount() { }
```

#### `mce` - catchError

```javascript
catchError(error) { }
```

#### `uss` - useState

```javascript
this.state = useState({});
```

#### `usr` - useRef

```javascript
this.ref = useRef("");
```

#### `usc` - useContext

```javascript
this.context = useContext();
```

#### `ust` - useStore

```javascript
this.state = useStore((state) => state);
```

#### `usd` - useDispatch

```javascript
this.dispatch = useDispatch();
```

#### `onm` - onMounted

```javascript
onMounted();
```

#### `onwu` - onWillUnmount

```javascript
onWillUnmount();
```

#### `onwp` - onWillPatch

```javascript
onWillPatch();
```

#### `onp` - onPatched

```javascript
onPatched();
```

#### `onws` - onWillStart

```javascript
onWillStart();
```

#### `onwup` - onWillUpdateProps

```javascript
onWillUpdateProps((nextProps) => {});
```

## License

Code licensed under [MIT](LICENSE).
