ThucDon.allow({
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

ThucDon.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
});

ThucDon.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

ThucDon.before.remove(function(userId, doc) {
	
});

ThucDon.after.insert(function(userId, doc) {
	
});

ThucDon.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

ThucDon.after.remove(function(userId, doc) {
	
});
