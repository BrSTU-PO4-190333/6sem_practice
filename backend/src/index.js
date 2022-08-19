const express = require('express');
const cors = require('cors');

const appSettings = require('./config/app.settings');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/swagger_GET'));
app.use('/api', require('./routes/swagger.json_GET'));
app.use('/api', require('./routes/redoc_GET'));

app.use('/api', require('./routes/auth_sign-in_POST'));
app.use('/api', require('./routes/auth_sign-up_POST'));

app.use('/api', require('./routes/auth_access-token_GET'));
app.use('/api', require('./routes/auth_access-token_{id}_DELETE'));
app.use('/api', require('./routes/auth_access-token_DELETE'));
app.use('/api', require('./routes/auth_access-token_PUT'));

app.use('/api', require('./routes/auth_refresh-token_GET'));
app.use('/api', require('./routes/auth_refresh-token_{id}_DELETE'));
app.use('/api', require('./routes/auth_refresh-token_DELETE'));

app.use('/api', require('./routes/tasks_GET'));
app.use('/api', require('./routes/tasks_POST'));
app.use('/api', require('./routes/tasks_{id}_DELETE'));
app.use('/api', require('./routes/tasks_{id}_PUT'));

app.listen(appSettings.APP__PORT, function () {
  console.log(`Server: ${appSettings.APP__HOST}:${appSettings.APP__PORT}`);
});
