let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>');
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
})