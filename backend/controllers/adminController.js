import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken"
import validator from "validator";
import artistModel from "../models/artistModel.js";

//api adding artist

const addArtist = async (req, res) => {
	try {
		const {
			name,
			email,
			password,
			speciality,
			degree,
			experience,
			about,
			fees,
			address,
		} = req.body;
		const imageFile = req.file;
		if (!imageFile) {
			return res.json({ success: false, message: "Image file is required" });
		}

		//checking for all data to add artist

		if (
			!name ||
			!email ||
			!password ||
			!speciality ||
			!degree ||
			!experience ||
			!about ||
			!fees ||
			!address
		) {
			return res.json({ success: false, message: "Missing Details" });
		}

		//validating email format

		if (!validator.isEmail(email)) {
			return res.json({
				success: false,
				message: "Please enter a valid email",
			});
		}

		//validating strong password
		if (password.length < 8) {
			return res.json({
				success: false,
				message: "Please enter a strong password",
			});
		}

		// hashing artist password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// upload image to cloudinary
		const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
			resource_type: "image",
		});
		const imageUrl = imageUpload.secure_url;

		const artistData = {
			name,
			email,
			image: imageUrl,
			password: hashedPassword,
			speciality,
			degree,
			experience,
			about,
			fees,
			address,
			date: Date.now(),
		};

		const newArtist = new artistModel(artistData);
		await newArtist.save();

		res.json({ success: true, message: "Artist Added" });
	} catch (error) {
		console.log(error);
		res.json({ success: false, message: error.message });
	}
};

//api for admin login

const loginAdmin = async (req, res) => {

  try {
    const {email, password} = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {  
      
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})

    } else {
      res.json({success:false, message:"Invalid credentials"})
    }

  } catch (error) {
    console.log(error);
		res.json({ success: false, message: error.message });
  }

};

export { addArtist, loginAdmin };
