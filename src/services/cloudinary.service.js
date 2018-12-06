const cloudName = 'dqk87o0m5';
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload/`

// on submit call to this function
export default function uploadImg(imgInput) {   
    function onSuccess(res) {
        console.log('uploadedImg', res);
        return res.url;
    }
    return new Promise((resolve) => resolve(doUploadImg(imgInput, onSuccess)))
}

function doUploadImg(imgInput, onSuccess) {
    const formData = new FormData();
    formData.append('file', imgInput.files[0])
    formData.append('upload_preset', 'djzbvtlj');

    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData
    })
    .then(function (response) {
        return response.json()
    })
    .then(onSuccess)
    .catch(function (error) {
        console.error(error)
    })
}
