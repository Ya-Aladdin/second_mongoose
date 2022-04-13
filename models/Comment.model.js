const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commentator: String,
  text: String,
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;