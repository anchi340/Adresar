import { Link } from "react-router-dom";
import {Container, Button, Form } from "semantic-ui-react";

import {useFormik} from "formik";
import * as Yup from "yup";



 function Login() {
     const formik =useFormik ({
         initialValues: {
             email: "",
             password: "",
            
         },
         validationSchema: Yup.object({
             email: Yup.string().email("Email adresa nije valjana").required("Email je obavezan"),
             password: Yup.string().required("Lozinka je obavezna").matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})', "Must have 6 characters")
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
             <h1>Adresar Login</h1>
             <Form style={{width:"30%"}} onSubmit={formik.handleSubit}>
          
                 <Form.Input 
                   type="text"
                   placeholder="email" 
                   name= "email"
                   onChange = {formik.handleChange}
                   error = {formik.errors.email}
                   value ={formik.values.email}
                   />    
                 <Form.Input 
                   type="password"
                   placeholder="password" 
                   name= "password"
                   onChange = {formik.handleChange}
                   error = {formik.errors.password}
                   value ={formik.values.password}
                   />         
               
               <Link to="/adresar">
                 <Button type="submit">Login</Button>
               </Link>
            
          </Form>   
         </Container>
     );
 }

export default Login;
