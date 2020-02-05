    import React from 'react';
    import Button from '@material-ui/core/Button';
    import Dialog from '@material-ui/core/Dialog';
    import DialogActions from '@material-ui/core/DialogActions';
    import DialogContent from '@material-ui/core/DialogContent';
    import DialogContentText from '@material-ui/core/DialogContentText';
    import DialogTitle from '@material-ui/core/DialogTitle';


    import ContactsIcon from '@material-ui/icons/Contacts';
    import ButtonBase from '@material-ui/core/ButtonBase';
    import EmailIcon from '@material-ui/icons/Email';
    import InstagramIcon from '@material-ui/icons/Instagram';
    import { withStyles } from '@material-ui/styles';

    const styles = {
        button: {
            padding:'10px',
            borderRadius: '50%',
            backgroundColor: 'rgba(212,175,55,0.8)',
            color: '#FFFFFF',
            '&:hover': {
                backgroundColor: 'rgba(212,175,55,1)',
            },
        }
    }

    function AlertDialog(props) {
    const {classes} = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog'>
        <ButtonBase className={classes.button} onClick={handleClickOpen} >
            <ContactsIcon onClick={handleClickOpen}/>
        </ButtonBase>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" 
            fullWidth= 'true'
            maxWidth= "md"
        >
            <DialogTitle id="alert-dialog-title"><span className='harryFont' style={{fontSize:'2.5rem',borderBottom: '2px solid grey'}}>Contact Us</span></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{textAlign: 'center'}}>
                <span className='harryFont'>Rishabh Singh <br /><strong>+91 8517817641</strong><br />
                Satyam Lachhwani <br /><strong>+91 9770977224</strong></span><br /><br />
                <span><EmailIcon style={{color:"#f00",position:'relative',paddingTop: 8}}></EmailIcon> <br/><strong >aveshaayam2k20@gmail.com</strong></span><br />
                <span><InstagramIcon style={{color:"#f00",position:'relative',paddingTop: 8}} /> <br/><strong><a href="https://www.instagram.com/aveshgecr/" style={{textDecoration: 'none', color: 'grey'}}>aveshgecr</a></strong></span>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
            </DialogActions>
        </Dialog>
        <style jsx>{`
            @font-face{
                font-family: Harry;
                src: url(static/font/HARRYP__.TTF);
            }
            .harryFont{
                font-family: Harry;
                font-size:1.5rem;
            }
            .dialog{
                position: fixed;
                right: 20px; 
                top: 20px;
            }
            @media (max-width: 700px){
                .dialog{
                    right: 30px;
                    top: 50px;
                }
            }
        `}</style>
        </div>
    );
    }


    export default withStyles(styles)(AlertDialog);