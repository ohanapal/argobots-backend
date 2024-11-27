const mongoose = require("mongoose");

const threadSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'User',
    },
    unique_id: {
      type: String,
      default: '',
    },
    bot_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Bot',
    },
    assistant_id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    thread_id: {
      type: String,
      default: '',
    },
    vector_store_id: {
      type: String,
      default: '',
    },
    metadata: {
      type: Object,
      default: {},
    },
    location: {
      type: {
        address: {
          type: String,
          default: '',
        },
        lat: {
          type: Number,
          default: 0,
        },
        long: {
          type: Number,
          default: 0,
        },
      },
      default: {},
    },
    last_seen: {
      type: Date,
      default: Date.now,
    },
    summary: {
      type: {
        text: {
          type: String,
          default: '',
        },
        last_update: {
          type: Date,
          default: Date.now,
        }
      },
      default: function() {
        return {
          text: '',
          last_update: Date.now()
        };
      }
    },
    source: {
      type: String,
      default: 'other'
    }
  },
  {
    timestamps: true,  
  }
);

const Thread = mongoose.model("Thread", threadSchema);
module.exports = Thread;
