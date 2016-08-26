# meteor-uploadcare-widget-demo

Demo
of [the official Meteor package](https://atmospherejs.com/uploadcare/uploadcare-widget)
for [Uploadcare widget](https://uploadcare.com/documentation/widget/)

## Install

Clone the repo to your computer

```
git clone https://github.com/uploadcare/meteor-uploadcare-widget-demo.git
cd meteor-uploadcare-widget-demo
```

or [download](https://github.com/uploadcare/meteor-uploadcare-widget-demo/archive/master.zip) and unzip.

## Settings

Copy file `settings.json.default` and rename to `settings.json`.

Set in `settings.json` your [public key](https://uploadcare.com/documentation/keys/) for Uploadcare instead `demopublickey`.

```json
"uploadcare": {
  "publicKey": "YOUR_PUBLIC_KEY"
}
```


## Run

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
