import {
  Button,
  Input,
  Table,
  TableBody,
  TableHeader,
  Typography,
} from './components';
import { Header } from './components/REMOVE_HERE_AFTER_DONE/Header';
import { TodoItems } from './components/REMOVE_HERE_AFTER_DONE/TodoItems';

function App() {
  return (
    <section
      className='w-100 py-5 px-4'
      style={{ backgroundColor: '#eee', borderRadius: '.5rem .5rem 0 0' }}
    >
      <div className='row d-flex justify-content-center py-5'>
        <div className='col col-lg-9 col-xl-9'>
          <div className='card rounded-3'>
            <div className='card-body p-4'>
              <h4 className='text-center my-3 pb-3'>To Do App</h4>
              {/* <Header />
              <Form />
              <TodoItems /> */}
              <Button>Hello World</Button>
              <Typography>Hello World</Typography>
              <Input placeholder='Hello World' />
              <Table align='middle' className='mb-0 bg-white'>
                <TableHeader>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                  </tr>
                </TableHeader>
                <TableBody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
