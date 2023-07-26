const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FollowSchema = Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "USer",
  },
  follow: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "USer",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Follow", FollowSchema);
