import {express} from 'express';
// graphql
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo Listo');
});

// resolver
const root = {hola: () => "Hola Mundo"};

app.use('./graphql', graphqlHTTP({
    // schema
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql : true

}));

app.listen(8000, () => console.log('El servidor esta funcionando') );