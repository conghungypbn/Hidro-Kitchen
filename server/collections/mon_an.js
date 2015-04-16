MonAn.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return true;
	},

	remove: function (userId, doc) {
		return true;
	}
});

MonAn.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
});

MonAn.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

MonAn.before.remove(function(userId, doc) {
	
});

MonAn.after.insert(function(userId, doc) {
	
});

MonAn.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

MonAn.after.remove(function(userId, doc) {
	
});
