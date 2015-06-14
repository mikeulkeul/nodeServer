var band = {
    post:bandPost,
    delete:bandDelete
}

function bandPost(req, res){
    res.send('hello from band');
}
function bandDelete(req, res){
    res.send('role delete');
}


module.exports = band;



