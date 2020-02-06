import React from 'react';
import Head from 'next/head';
import AlertDialog from '../Dialog/Dialog';
import Typing from 'react-typing-animation';

import { withStyles } from '@material-ui/styles';
import EventIcon from '@material-ui/icons/Event';

const styles = theme => ({
    root: {
        // height:"100%",
        margin: '0px',
        height: "720px",
        backgroundImage: 'url("static/img/hogwarts.png")',
        backgroundSize:'cover',
        backgroundColor: '#454',  
        textAlign: 'center',
        color: '#eee'
    },
    heading: {
      // paddingTop : 400,
      // backgroundImage: 'url("static/img/logo.png")',
      margin: '0px',
    //   marginTop: '-80px',
      fontSize:'3rem',
      fontFamily: 'Harry',
      letterSpacing: '0.3em'
    },
    dates: {
        position: 'absoulte',
        bottom: '10px',
        fontFamily: 'Harry',
        fontSize:'1.5rem'
    },
    logo: {
      // height: "1500px",
      // zIndex: "100",
      // backgroundImage: 'url("static/img/logo.png")',
    }
});

function Landing(props){
    
    const {classes} = props;
    return (
        <>
        <Head>
          {/* <link href="https://fonts.googleapis.com/css?family=Kelly+Slab&display=swap" rel="stylesheet"></link> */}
          <title>Avesh: Chapter 4</title>
          <link rel="stylesheet" href="static/styles.css" />
        </Head>
        <div className={classes.root}>
          <img src='../../static/img/logo2.png' width='200' />
          {/* <img className='title' src='../../static/img/avesh.png' width='300' /> */}
          <AlertDialog/>
          <div className={classes.logo}></div>
          <div className='content'>
            <h3 className={classes.heading} style={{fontSize:'6rem', margin:'20px 0'}}>Avesh</h3>
            <h3 className={classes.heading}>Chapter 4</h3>
            <Typing speed={150}>
                <h1 style={{letterSpacing:'0.2rem'}}>THE CHAMBER OF SECRETS IS GOING TO BE REVEALED SOON...</h1>
            </Typing>
            <div className={classes.dates} style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'10%'}}>
                <div>
                    <EventIcon />
                </div>
                <div style={{backgroundColor: '#454'}}> &nbsp;23 - 25 of February</div>
            </div>
          </div>
          <style jsx>{`
            .content{
                padding-top: 50%;
            }
            img{
              position: absolute;
              top: 0;
              left: 0;
              margin-top:-70px;
              margin-left: -20px;
            }
            @font-face{
              font-family: Harry;
              src: url(static/font/HARRYP__.TTF);
            }
            h1 {
                font-family: Harry;
                font-size: 2.3rem;
              text-align:center;
              color: #D4AF37;
              text-shadow: 0 1.5px 1px white, 2px 6px 2.5px grey;
              border-right: .15em solid orange; 
              border-left: .15em solid orange; 
              padding: 0 20px;
            }
            .title{
                position: static;
                marginTop:-20px;
                marginLeft: 60px;
            }
            @media (max-width: 800px){
                .title{
                    margin-top:50px;
                    margin-left: 75px;
                }
            }
            @media (min-width: 800px){
                .content{
                    padding-top: 16%;
                }
            }
          `}</style>
        </div>
        </>
      );
}

export default withStyles(styles)(Landing);