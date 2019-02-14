import app from "./app";
import * as cors from "cors";

const PORT = 3000;

// Enable cors - default (any) till we know where it will be hosted
app.use(cors());

// Listen on port
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})