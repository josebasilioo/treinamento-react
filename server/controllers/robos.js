const keystone = require('keystone');
const roboCombate = keystone.list('roboCombate').model;
const roboAutonomoIndividual = keystone.list('roboAutonomoIndividual').model;
const roboAutonomoColetivo = keystone.list('roboAutonomoColetivo').model;

const handlers = {
  getRobo: async function (req, res) {
    
    const objeto = {}

  
    await roboCombate.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }

      objeto.dataRoboCombate = data;

    });

    await roboAutonomoIndividual.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
    
      objeto.dataRoboAutonomoIndividual = data;
    
    });

    await roboAutonomoColetivo.find().exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send('DB Error');
        }
      
        objeto.dataRoboAutonomoColetivo = data;
      
      });
    
    await res.status(200).send(objeto);
  
  }
}
module.exports = handlers; 