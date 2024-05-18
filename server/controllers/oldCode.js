// export const submitAbstract = async (req, res) => {
//     const { firstName, lastName, email, mobile, topic } = req.body;

//     if (!req.file) {
//         return res.status(401).json({ message: 'Please upload your abstract file' });
//     }
//     const { originalname, path } = req.file;

//     if (!email || !mobile || !topic) {
//         return res.status(401).json({ message: 'Please enter all required fields' });
//     }
//     if (!validateEmail(email)) {
//         return res.status(401).json({ message: 'Invalid email address' });
//     }
//     if (!originalname) {
//         return res.status(401).json({ message: 'Please upload your abstract file' });
//     }

//     const uploadParams = {
//         Bucket: process.env.AWS_S3_BUCKET_NAME,
//         Key: originalname,
//         Body: fs.createReadStream(path)
//     };

//     try {
//         const uploadResult = await s3.upload(uploadParams).promise();
//         console.log('File uploaded successfully:', uploadResult.Location);
//         await unlinkFile(path); // Delete the file safely after upload

//         const newAbstract = {
//             firstName,
//             lastName,
//             email: email.toLowerCase(),
//             phoneNo: mobile,
//             fileName: originalname,
//             topic: topic,
//             created_at: new Date()
//         };

//         await abstractsCollection.insertOne(newAbstract);
//         return res.status(201).json({ message: 'Abstract submitted successfully' });

//     } catch (error) {
//         console.error('Error:', error);
//         await unlinkFile(path); // Ensure the file is deleted even if an error occurs
//         if (error.code === 'NoSuchBucket') {
//             return res.status(500).json({ message: 'Bucket does not exist' });
//         }
//         if (error.code === 11000) {
//             return res.status(400).json({ message: 'File name already used' });
//         }
//         return res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// export const submitAbstract = async (req, res) => {
//   console.log(req.body);
//   const { firstName, lastName, email, mobile, topic, title, author } = req.body;

//   if (!req.file) {
//     return res.status(401).json({ message: 'Please upload your abstract file' });
//   }

//   const { originalname, path } = req.file;

//   if (!email || !mobile || !topic) {
//     return res.status(401).json({ message: 'Please enter all required fields' });
//   }
//   if (!validateEmail(email)) {
//     return res.status(401).json({ message: 'Invalid email address' });
//   }
//   if (!originalname) {
//     return res.status(401).json({ message: 'Please upload your abstract file' });
//   }

//   const uploadParams = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: originalname,
//     Body: fs.createReadStream(path)
//   };

//   try {
//     const command = new PutObjectCommand(uploadParams);
//     const uploadResult = await s3Client.send(command);
//     console.log('File uploaded successfully:', uploadResult.Location);
//     await unlinkFile(path); // Delete the file safely after upload

//     const newAbstract = {
//       firstName,
//       lastName,
//       email: email.toLowerCase(),
//       phoneNo: mobile,
//       fileName: originalname,
//       title: title,
//       author: author,
//       topic: topic,
//       created_at: new Date()
//     };

//     await abstractsCollection.insertOne(newAbstract);
//     // send thanks emeil to the user who submitted
//     // sendConfirmationEmail(req.body.email);
//     // sendConfirmationEmail(email);
//     return res.status(201).json({ message: 'Abstract submitted successfully' });

//   } catch (error) {
//     console.error('Error:', error);
//     await unlinkFile(path); // Ensure the file is deleted even if an error occurs
//     if (error.name === 'NoSuchBucket') {
//       return res.status(500).json({ message: 'Bucket does not exist' });
//     }
//     if (error.code === 11000) {
//       return res.status(400).json({ message: 'File name already used' });
//     }
//     return res.status(500).json({ message: 'Something went wrong' });
//   }
// };

/// download abstract

// console.log('req coming');
// const key = req.params.key;
// const downloadParams = {
//     Bucket: process.env.AWS_S3_BUCKET_NAME,
//     Key: key
// };

// s3.getObject(downloadParams, (err, data) => {
//     if (err) {
//         console.error('Error downloading file:', err);
//         return res.status(500).send('Internal Server Error');
//     }
//     res.set({
//         'Content-Type': data.ContentType,
//         'Content-Length': data.ContentLength,
//         'Content-Disposition': `attachment; filename="${key}"`
//     });
//     res.send(data.Body);
// });  