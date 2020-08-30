// @desc Get All Bootcamps
// @route Get /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc Get Single Bootcamps
// @route Get /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc Create Bootcamps
// @route POST /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
};

// @desc Update Bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc Delete Bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `Delete bootcamp ${req.params.id}` });
};
