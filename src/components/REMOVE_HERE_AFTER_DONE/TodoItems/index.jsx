import React from 'react';
import { TodoItem } from '../TodoItem';

export function TodoItems() {
  return (
    <table className='table mb-4'>
      <thead>
        <tr>
          <th scope='col'>No.</th>
          <th scope='col'>Todo item</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem />
      </tbody>
    </table>
  );
}
