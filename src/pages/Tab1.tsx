import { IonButtons,IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { person,calendar,logoFacebook,logoTwitter,logoInstagram,download, mail, call} from 'ionicons/icons';
import React from 'react';

const Tab1: React.FC = () => {
  return (
    <IonPage> 
      <IonHeader>
        <IonToolbar>
          <IonTitle>Logo</IonTitle>
         

          
           <IonButtons  slot='end'>
           {/* <IonButton>Home</IonButton>
            <IonButton>Login</IonButton>
            <IonButton>Sign up</IonButton> */}


            <IonInput name='search'
              aria-label="Email" placeholder=''>
            

            </IonInput>


            <p><IonIcon icon={logoFacebook}></IonIcon></p>
            <p><IonIcon icon={logoTwitter}></IonIcon></p>
            <p><IonIcon icon={logoInstagram}></IonIcon></p>





           </IonButtons>



        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
<div className='myhome'>
  <img src="man.jpg"
  />

</div>
<div className='myleftside'>

  <h1 className='myheader2'>Hello I,m <br />John</h1>
  <h4 className='h4'>Graphic Designer</h4>
  <p>He worked really hard and would talk about being a graphic designer or an architect. He is a 30-year-old graphic designer from the city. Modest gentrification has led to galleries doubling up as branding companies, photographers as film-makers and graffiti artists as graphic designers. I'm 24 and a graphic designer.</p>
  <p><IonIcon icon={call}></IonIcon>,Phone:123-456-789</p>
  <p><IonIcon icon={mail}></IonIcon>,info@asadwarsame11@gmail.com</p>
  <p><IonIcon icon={person}></IonIcon>,Africa 118, Westlands Business Centre, 7 Floor,</p>
  <p><IonIcon icon={calendar}></IonIcon>,Date of birth:Aug 28th 1987</p>
  <IonButton className='mybutton'>Download Icon<IonIcon icon={download}></IonIcon></IonButton>
</div>
      <div className='big'>
        <h1>How we Help Best!</h1>
        </div>
       <div className='box'>
       <h4>Marketing</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>
       <div className='box'>
       <h4>Operation</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>
       <div className='box'>
       <h4>Strategy</h4>
       <p>Idk anything about this!</p>
       <i>Learn more</i>
       </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
