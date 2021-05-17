import Heading from "../layout/Heading";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

    return (
        <>

        <div className="split-wrapper">
            <div className="left-container">
            <Heading title="Lurer du på noe? Ta kontakt!" />
            <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <input type="text" placeholder="Ditt navn" className="form-control" {...register("Ditt navn", {required: true, min: 3, maxLength: 40})} />
      <input type="text" placeholder="Email" className="form-control"{...register("Din epost", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Emne" className="form-control" {...register("Emne", {required: true, min: 10, maxLength: 80})} />
      <textarea className="form-control" {...register("Melding", {required: true, maxLength: 350})} />

      <Button variant="primary" className="contact-submit" type="submit" size="lg" block>
                Send inn
            </Button>
    </form>
            </div>
            <div className="vertical-line"></div>
            <div className="right-container">
            <Heading title="Hvor finner du oss?" />
            
            <div className="contact-directions-container">
            <p className="contact-directions">
            Adresseveien 1 
                Adresse 9123
            Veibeskrivelse: 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at malesuada metus, non finibus neque. 
            Aliquam sit amet magna mauris. 
            Maecenas et purus ligula. 
            </p>
            
            <iframe className="contact-maps" title="sjursnes" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=Sjursnes&key=AIzaSyDpSenFvkglwJKPpgittKgOIk2F8pJN3LE">
            </iframe>
            </div>
            </div>
        </div>

        </>
    )
}