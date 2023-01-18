import React from 'react';
import { useForm } from 'react-hook-form';
import visitsCsvApi from '../../api/visitsCsvApi';

const FileUploadForm = ({ setSourceCounts, apiRoute }) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('csvFile', data.file[0]);

    const responseData = await visitsCsvApi(formData, apiRoute);
    setSourceCounts(responseData);
  };

  return (
    <div>
      <h5>Please select the csv file</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register('file')} />
        <input type="submit" disabled={!isDirty || !isValid} />
      </form>
    </div>
  );
};

export default FileUploadForm;
