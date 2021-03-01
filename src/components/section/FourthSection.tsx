import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import MaskedInput from 'react-text-mask';
import styles from '../../styles/Fourth.module.css';
import { Button } from '../form/Button';
import { Input } from '../form/Input';

function FourthSection(): JSX.Element {
  const phoneNumberMask = [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  return (
    <section id={styles.fourth_section}>
      <div>
        <div className={styles.title_container}>
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nisi repudiandae! Quia,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
        </h1>

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil!
        </h3>

        </div>
        <div className={styles.form_container}>
          <Formik
            onSubmit={(value) => {
              const changedValue = value.telefone
                .replace(/\)/g, '')
                .replace(/\(/g, '')
                .replace(/-/g, '')
                .replace(/ /g, '');

              alert('hoa')
            }}
            initialValues={{
              name: '',
              email: '',
              telefone: '',
              mensagem: '',
            }}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <form>
                <div>
                  <Input placeholder="Nome" />
                  <ErrorMessage name="Nome" />
                </div>
                <div>
                  <Input placeholder="Email" />
                  <ErrorMessage name="Email" />
                </div>
                <div>
                  <MaskedInput
                    mask={phoneNumberMask}
                    name="phone"
                    onChange={e => {
                      const value = e.target.value || '';
                      console.log({ value });
                      setFieldValue('phone', value);
                    }}
                    style={{
                      padding: "12px 36px",
                      margin: "5px",
                      borderRadius: "5px",
                      outline: "0",
                      border: "0",
                      textAlign: "center",
                      fontSize: "15px",
                      lineHeight: "16px",
                    }}
                    placeholder="Telefone"
                  />
                  <ErrorMessage name="telefone" />
                </div>
                <div>
                  <textarea placeholder="mensagem" />
                  <ErrorMessage name="mensagem" />
                </div>
                <Button disabled={isSubmitting}>Enviar</Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export { FourthSection };