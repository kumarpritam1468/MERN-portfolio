const home = async () =>{
    try {
        res.status(200).send("Hello there!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {home};