import {Template} from 'meteor/templating'
import {ReactiveVar} from 'meteor/reactive-var'
import uploadcare from 'meteor/uploadcare:uploadcare-widget'

import './main.html'

Template.show.onRendered(function() {
	let widget = uploadcare.Widget('#file-show')

	widget.onUploadComplete(info => {
		// Handle uploaded file info.
		this.uuid.set(info.uuid)
		this.cdnUrl.set(info.cdnUrl)
	})
})

Template.show.onCreated(function() {
	this.uuid = new ReactiveVar('')
	this.cdnUrl = new ReactiveVar('')
})

Template.show.helpers({
	uuid() {
		return Template.instance().uuid.get()
	},
	cdnUrl() {
		return Template.instance().cdnUrl.get()
	},
})

