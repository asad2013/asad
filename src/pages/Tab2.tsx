import { IonContent,IonButtons,IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonRow, IonCol, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import {mail,location,call, warning } from 'ionicons/icons';
import React from 'react';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketing</IonTitle>


          <IonButtons  slot='end'>
           <IonButton>Home</IonButton>
            <IonButton>Login</IonButton>
            <IonButton>Sign up</IonButton>
            </IonButtons>




        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className='alosenioiur'>
            <h1 className='h1'>Get In Touch</h1>
            <p className='h5'>Mobile application development is
               the process of creating software applications that run on a
                mobile device, and a typical mobile application utilizes a network 
                connection to work with remote computing resources.</p>
            <p className='helloname'><IonIcon icon={mail}></IonIcon>  CHART TO US</p>
            <p className='h2'>Our Friendly Team Is Here To Help</p>
            <p className='hello'>hi@ourcompany.com</p>
            <p className='h0'><IonIcon icon={location}></IonIcon>  OFFICE</p>
            <p>Come Say Hi To Our HQ</p>
            <p className='h9'>121 rock street</p>
            <p className='niyorktag'>New york,NY 92103-9000</p>
            <p><IonIcon icon={call}></IonIcon>  PHONE</p>
            <p>Moon-Fri from 8pm to 5am</p>
            <p>+1(555)000-000</p>
          </div>
          <div className='alosenbious'>
            <h4>LEVEL UP YOUR BRAND</h4>
            <p className='p2'>You can reach us anytime via <span className='span'>hi@ourcompany.com</span></p>
           
           <IonRow>
            <IonCol class='col'>name</IonCol>
            <IonCol class='ioncol'>Email</IonCol>
           </IonRow>
           <IonRow>
            <input className='ni' type='text' placeholder=''/>
            <input className='ni' type='text' placeholder=''/>
           </IonRow>
           <div className='mycheckbox'><br />
            <input type='checkbox'></input>type 1<br />
            <input type='checkbox'></input>type 2<br />
            <input type='checkbox'></input>type 3


            <p className='how'>How can we help you?</p>

            <input type='text' placeholder=''/><br />
            <input type='checkbox'></input>I accept to the <span className='span2'>Term Service</span>
            <br /><br />
            <IonButton color="warning">Submit</IonButton>
              
          </div>
          </div>


     

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
