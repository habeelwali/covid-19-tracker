import React from 'react'
import styles from './Home.module.css';
import { Grid, Box } from '@material-ui/core';
import logo from './covlogo.jpeg'

const Home = () => {
  
    return (
        <div className={styles.container}>
            <div >

                <h1 className={styles.h1}>
                    welcome to covid-19 tracker apps
                </h1>
                 <div >
                <h1 style={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"center",marginBottom:"1%"}}>
                    Corona Virus  <p style={{color: " blue", marginLeft:"1%"}}> SYMPTOMS</p>
               </h1>
               <p style={{display:"flex" ,fontSize:"1.78rem",alignItems:"center",marginTop:"2%",justifyContent:"center"} } >It can take up to 14 days for symptoms of coronavirus to appear. The main symptoms to look out for are:</p>

            </div>
            </div>        
            <Grid container spacing={3} justify="center">
     
                  <Grid item component={Box} xs={12} md={3} className={styles.box} >

                 
                    <div className={styles.servicebox} >
                     <p style={{fontSize:"1.78rem"}}>Cauching</p>
                        <div className={styles.innerbox}>

                            <div className="icon-box"><img src="http://covid.gov.pk/theme_img/icons/w1.png" alt="" /></div>


                        </div>
                    </div>

               
                    <div className={styles.servicebox2} >
                    <p style={{fontSize:"1.78rem"}}>Shortness Of Breath</p>
                        <div className={styles.innerbox}>
                            <div className="icon-box"><img src="http://covid.gov.pk/theme_img/icons/w3.png" alt="" /></div>


                        </div>
                    </div>

                  </Grid>
                  <img src={logo} className={styles.log} alt=""/ >


                  <Grid item component={Box} xs={12} md={3} className={styles.box} >
                  


                    <div className={styles.servicebox3}  >
                    <p style={{fontSize:"1.78rem"}}>Fever</p>
                        <div className={styles.innerbox}>
                            <div className="icon-box"><img src="http://covid.gov.pk/theme_img/icons/w4.png" alt="" />  </div>

                        </div>
                    </div>


                    <div className={styles.servicebox4}>
                    <p style={{fontSize:"1.78rem"}}>Sore Throat</p>
                        <div className={styles.innerbox}>
                            <div className="icon-box" style={{marginBottom:"70%",marginLeft:"23%"}}><img src="http://covid.gov.pk/theme_img/icons/w5.png" alt="" /></div>


                        </div>
                    </div>

                   
                </Grid>
                <Grid item component={Box} xs={12} md={3} className={styles.box} >
                
                    <div className={styles.precation}>
                        <h1  style={{color: " blue"}}>
                        PRECAUTIONS
                        </h1>
                        <br/>
                        <h2 className={styles.hadding} style={{width:"575px"}}>
                        <p > Use Face Masks When In Closed And Crowded Places</p>
                        </h2>
                            <p  className={styles.p1} style={{fontSize:"1.3rem",width:"550px",marginRight:"5%"}}>
                            Cover coughs and sneezes with tissues.
                            </p>
                            <br/>   
                        <h2 className={styles.hadding2} style={{alignItems:"start",width:"580px"}} >
                       <p> Avoid Crowd </p>
                        </h2>
                            <p  className={styles.p2} style={{display:"flex",fontSize:"1.3rem",width:"550px",alignItems:"center",marginTop:"1%",marginRight:"5%" } } >
                            As an individual, you can lower your risk of infection by reducing your rate of contact with other people. Avoiding public spaces and unnecessary social gatherings, especially events with large numbers of people or crowds, will lower the chance that you will be exposed to the coronavirus as well as to other infectious diseases like flu.
                            </p>
                            <br/>
                            <h2 className={styles.hadding2} style={{alignItems:"start",marginRight:"%", width:"580px"}} >
                           
                       <p> Hand Hygiene </p>
                        </h2>
                            <p  className={styles.p2} style={{display:"flex",fontSize:"1.3rem",width:"550px",alignItems:"center",marginTop:"1%" , marginRight:"5%"} } >
                            Wash hands often with soap and water for at least 20 seconds or use hand sanitizer if soap and water are not available.
                            </p>
                            <br/>
                            <h2 className={styles.hadding2} style={{alignItems:"start",width:"580px"}} >
                            <p> Sick People </p>
                        </h2>
                            <p  className={styles.p2} style={{display:"flex",fontSize:"1.3rem",width:"550px",alignItems:"center",marginTop:"1%" ,marginRight:"5%"} } >
                            Avoid close contact with anyone showing symptoms of respiratory illness.
                            </p>   

                    </div>
                    </Grid>
                
            </Grid>
            </div>
       

    )
}
export default Home;