const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/clinicWeb_DB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

