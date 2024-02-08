import multer from "multer";

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set your desired upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

// Set up file filter for allowed formats
const fileFilter = function (req, file, cb) {
  const allowedFormats = ["jpg", "jpeg", "png"];
  const fileFormat = file.originalname.split(".").pop().toLowerCase();

  console.log("Original File Name:", file.originalname);
  console.log("File Format:", fileFormat);

  if (allowedFormats.includes(fileFormat)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file format. Allowed formats: jpg, jpeg, png"),
      false
    );
  }
};

// Set up limits for file size
const limits = {
  fileSize: 2 * 1024 * 1024, // 2 MB
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limits,
});

module.exports = upload;
