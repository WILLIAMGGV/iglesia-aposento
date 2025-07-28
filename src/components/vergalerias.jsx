import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import imgfondoraya from '../img/textura.jpg';

import Eventos2 from './eventos2';


const Vergalerias = () => {



const cargapage = (page) => {
    window.location.href = page;
   window.scrollTo(0, 0);
  }



  return (
    
          
          <Eventos2 />
      
  );
};

export default Vergalerias;
