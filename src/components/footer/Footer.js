import React from 'react';
import Logo from './logo.png';
import styles from './Footer.module.css'

 const Footer = () => {
    return (
        <div className={styles.container} style={{display:"flex",fontSize:"2.3rem",width:"550px",alignItems:"center",marginTop:"3%",marginBottom:"2%",marginLeft:"33%" ,justifyContent:"center"} }>
            
            <footer className={styles.txt}>
                &copy; 2020 Created by :  
            
                <a   target="blank" href="https://github.com/habeelwali"> 
                    habeel wali <img className={styles.img} alt="" src={Logo}/>
                </a>
            </footer>
        </div>
    )
}
export default Footer