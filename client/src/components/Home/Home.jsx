import React from 'react';
import Categories from '../Categories/Categories';
import Interior from '../Interior/Interior';
import MainHeader from '../MainHeader/MainHeader';
import PromoPhotos from '../PromoPhotos/PromoPhotos';

function Home(props) {

  // function sendSMS(event) {
  //   event.preventDefault()

  //   const token = 'eyJhbGciOiJIUzI1NiJ9.eyJjdXN0b21lcl9pZCI6Mzc5MywiZGF0ZXRpbWUiOjE2NDI1ODEwOTd9.5BQqcaIPQ2Hho4PfJOdjEyunN6BkNnfv1Wf7qj4-6J8'

  //   const data = {
  //     phone: 89051397723,
  //     text: `Вы забронировали 44 места с
  //     в Anapa Guest House`,
  //   };

  //   fetch('https://api.pushsms.ru/api/v1/delivery?text=textsms&phone=79051397723', {
  //     method: "POST",
  //     headers: {
  //       Authorization: token,
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   }
  //   )
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });

// }

return (
  <div>
    <MainHeader />
    <PromoPhotos />
    <Interior />
    <Categories />
    {/* <button onClick={sendSMS}>SMS</button> */}
  </div>
);
}

export default Home;

