const home = async (req,res) =>{
    try {
        res.status(200).send("Hello there!");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res) =>{
    try {
        console.log(req.body);
        res.status(200).json({message:req.body});
    } catch (error) {
        res.status(500).json({message:error});
    }
}

module.exports = {home, register};