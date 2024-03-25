const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.API_Key,
    api_secret: process.env.API_Secret
});


const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve(
                {
                    url: result.secure_url
                },
                {
                    resource_type: "auto"
                }
            )
        })
    })
}


module.exports = cloudinaryUploadImg