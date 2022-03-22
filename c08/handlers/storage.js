const MAX_FILESIZE = 1048576;
const ALLOWED_FILETYPES = ['image/jpeg', 'image/png', 'image/pjpeg', 'image/gif'];


const upload = async(req, res) => {
    // console.log(req.files);
    if (MAX_FILESIZE < req.files.document.size) {
        return res.status(400).send('max file size id 1mb!')
    }
    return res.status('OK');
};
const download = async(req, res) => {
    return res.send("OK");
};

module.exports = {
    upload,
    download
}