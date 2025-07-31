const home = async(req, res) => {
    try{
        res.send("Auth route is workings"); 
    }
    catch(err){
        console.error("Error in authController home:", err);
        res.status(500).send("Internal Server Error");
 
    }
}

module.exports = { home }; 