exports.uploadReport = (req, res) => {
    if (!req.file) return res.status(400).json({ message: 'No file provided' });
    res.status(200).json({ message: 'Report uploaded successfully', filename: req.file.filename });
  };