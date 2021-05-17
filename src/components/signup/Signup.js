import React from 'react';
import { useForm } from 'react-hook-form';
import Heading from "../layout/Heading";
import Button from 'react-bootstrap/Button';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>

    <Heading title="Meld deg på nå!" />

    <form onSubmit={handleSubmit(onSubmit)} className="form-row">
      <select {...register("Velg kurs", { required: true })} className="form-control">
        <option value="Kurs 1">Kurs 1</option>
        <option value=" Kurs 2"> Kurs 2</option>
        <option value=" Kurs 3"> Kurs 3</option>
      </select>
      <input type="text" placeholder="Fullt navn" className="form-control"{...register("Fullt navn", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" className="form-control"{...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />

      <Button variant="primary" type="submit" className="signup-submit" size="lg" block>
                Send inn
            </Button>
    </form>
    </>
  );
}