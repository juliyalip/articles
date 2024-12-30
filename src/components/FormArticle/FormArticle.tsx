import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Button from '../Button/Button';
import SelectCountry from '../SelectCountry/SelectCountry';
import { ICategory} from '../../interfaces/articles';
import * as Api from '../../services/api';
import style from './FormArticle.module.scss';

interface MyFormValues {
  title: string;
  body: string;
}

const countries: ICategory[] = [
 
];

const initialValues: MyFormValues = { title: '', body: '' };

export default function FormArticle() {
  const [country, setCountry] = useState<ICategory>(countries[2]);




  const handleSubmit = (
    data: MyFormValues,
    actions: FormikHelpers<MyFormValues>,
  ) => {
    Api.addArticle(data);
    console.log('from submit', data, actions);

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={style.container}>
        <div className={style.sectionLabel}>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" className={style.input} />
        </div>
        <div className={style.sectionLabel}>
          <label htmlFor="body">Content</label>
          <Field as="textarea" id="body" name="body" rows="20"className={style.input} />
        </div>

      
        <Button>
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
