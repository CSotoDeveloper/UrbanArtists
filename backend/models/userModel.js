import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	image: { type: String, default: "data:image/png;base64,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"},
	address: { type: String, required: true },
	gender: { type: String, default: "Not Selected" },
	dob: { type: String, default: "Not Selected" },
	phone: { type: String, default: '00000000' },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;