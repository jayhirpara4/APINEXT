import app from './src/app';
import { config } from './src/config/config';

const startServer = () => {
    const port = config.prot || 3000;

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
};

startServer();