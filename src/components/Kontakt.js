 
import React from "react";
import {Container, Button, Form , Dropdown} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
/* import 'react-datepicker/dist/react-datepicker.css' */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';

 function Kontakt() {
   
     
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const formik =useFormik ({
        initialValues: {
            name: "",
            surname: "",
           
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, 'Prektatko').max(101,'Predugo').required('Ime je obavezno'),
            surname: Yup.string().min(3, 'Prekratko').max(301,'Predugo').required('Prezime je obavezno'),
            date: Yup.string().required("Obavezan unos"),
        }),
         onSubmit: (formData) => {
            console.log(formData);
        },
    });

  
    
    return (
        <Container
            style = {{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: "50vh",
            }}
        >
            <h1>Novi kontakt</h1>
            <Form style={{width:"30%"}} onSubmit={formik.handleSubit}>
         
                <Form.Input 
                  type="text"
                  placeholder="Ime" 
                  name= "name"
                  onChange = {formik.handleChange}
                  error = {formik.errors.name}
                  value ={formik.values.name}
                  />    
                <Form.Input 
                  type="text"
                  placeholder="Prezime" 
                  name= "surname"
                  onChange = {formik.handleChange}
                  error = {formik.errors.surname}
                  value ={formik.values.surname}
                  />     
                
           <DatePicker
                name="date"
                placeholderText="Unesite datum rodenja"
                error  = {formik.errors.date}
                selected={selectedDate}
                onChange= {date => setSelectedDate(date)}
                isClearable
                error = {formik.errors.date}
                value = {formik.values.date}
           />
        <br/>
        <br/>
        <Button type="submit">Spremi  </Button>
            
           </Form>   
          </Container>
      );
  }

export default Kontakt;
  
 