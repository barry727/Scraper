var mongoose = require('mongoose')

var CommentSchema = mongoose.Schema;
var ArticleSchema = new Schema({
    title: {
        type: String,
    },
    body: {
      type: String,
      required: true
  }
})
var Comment = mongoose.model('Comment', ArticleSchema);
module.exports = Comment;