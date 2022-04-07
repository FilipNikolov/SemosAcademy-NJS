const owm = require('../pkg/owm');

const getForCity= async(req,res)=>{
    try{
        let weather =await owm.getCityWeather(req.params.city)
        res.send(weather);
    }catch(err){
        return res.status(500).send('Interval server error');
    }
};

module.exports = {
    getForCity
};