# meteor-uploadcare-widget-demo

This repository contains a demo
of [the official Meteor package](https://atmospherejs.com/uploadcare/uploadcare-widget)
for [Uploadcare widget](https://uploadcare.com/documentation/widget/)

## Install

There are two ways to install the demo.

* Clone the repo to your computer,

```
git clone https://github.com/uploadcare/meteor-uploadcare-widget-demo.git
cd meteor-uploadcare-widget-demo
```

* [Download](https://github.com/uploadcare/meteor-uploadcare-widget-demo/archive/master.zip)
and unzip the archive.

## Settings

Please, copy the default settings file `settings.json.default`
to your computer and rename it to `settings.json`.
Next step is to set your 
[public key](https://uploadcare.com/documentation/keys/) within the file,
type it in instead of the default Uploadcare `demopublickey`.

Here's how it should look like,
```json
"uploadcare": {
  "publicKey": "YOUR_PUBLIC_KEY"
}
```

## Run

Running the demo is simple.
Please, run `npm start` and head over
to [http://localhost:3000](http://localhost:3000) using your browser.

## Contributors

* [@Zmoki](https://github.com/Zmoki)
