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


Template.form.onRendered(function() {
	let widget = uploadcare.Widget('#file-form')

	widget.onChange(file => {
		let submitButton = this.find('.new-images [type=submit]')

		if (!file) {
			submitButton.disabled = true
		}
		else {
			file
				.done(info => {
					submitButton.disabled = false
				})
				.fail((error, info) => {
					submitButton.disabled = true
				})
		}
	})
})

Template.form.onCreated(function() {
	this.images = new ReactiveVar([])
})

Template.form.helpers({
	images() {
		return Template.instance().images.get()
	},
})

Template.form.events({
	'submit .new-images'(event, instance) {
		event.preventDefault()

		// Get value from widget
		const widget = uploadcare.Widget('#file-form')
		const file = widget.value()

		file
			.done(info => {
				const image = info.cdnUrl
				const images = instance.images.get()

				instance.images.set([...images, image])

				// Clear widget
				widget.value(null)
			})
	},
})

