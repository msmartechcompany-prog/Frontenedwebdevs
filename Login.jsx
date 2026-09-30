function Login() {
  return (
    <body>
      
    
    <div className="All" >
      <div className="header">
       <h1> Welcome to Login Page!!!</h1>
        </div>
        <div className="form">
          <form action="get">
            <label htmlFor="Name">Name:</label>
            <input type="text" placeholder="Name:" required /> <br /> 
            <label htmlFor="Date Of Birth">Date Of Birth: </label>  <input type="Date" placeholder="DOB" /> 
            
             <br />
          </form>
        </div>
        <div className="gender">
          <label htmlFor="Geneder_select">Select your Gender:</label> <br />
          <input type="radio" name="gender" value="Male" />  
          <label> Male
                </label> <br /> 
            <input type="radio" name="gender" value="Female" /> <label >Female</label> <br />
           <input type="radio"name="gender" value="Custom" />  <label >Custom</label>
        </div>
        
      </div>
      </body>
    
   
    
  );
}

export default Login;
