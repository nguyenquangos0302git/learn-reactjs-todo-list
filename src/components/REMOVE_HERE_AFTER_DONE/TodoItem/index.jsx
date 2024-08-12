import React from 'react';
import { Button } from '../../Button';

export function TodoItem() {
  return (
    <tr>
      <th scope='row'>1</th>
      <td>Buy groceries for next week</td>
      <td>In progress</td>
      <td>
        <Button actionText='Delete' styleButton='danger' />
        <Button actionText='Finished' styleButton='success ms-1' />
      </td>
    </tr>
  );
}
