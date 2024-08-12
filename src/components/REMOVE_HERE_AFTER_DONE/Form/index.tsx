import { Button } from '../Button';

export function Form() {
  return (
    <form className='row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2'>
      <div className='col-12'>
        <div className='form-outline'>
          <input type='text' id='form1' className='form-control' />
          <label
            className='form-label'
            htmlFor='form1'
            style={{ marginLeft: 0 }}
          >
            Enter a task here
          </label>
          <div className='form-notch'>
            <div className='form-notch-leading' style={{ width: 9 }} />
            <div className='form-notch-middle' style={{ width: '105.6px' }} />
            <div className='form-notch-trailing' />
          </div>
        </div>
      </div>
      <div className='col-12'>
        {/* <Button actionText='Save' styleButton='primary' /> */}
        <Button />
      </div>
      <div className='col-12'>
        {/* <Button actionText='Get tasks' styleButton='warning' /> */}
      </div>
    </form>
  );
}
