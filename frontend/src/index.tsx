import { createRoot } from 'react-dom/client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import "./styles/globals.css"


// Effacez le contenu HTML existant
document.body.innerHTML = '<div id="app"></div>';

// Affichez plutôt votre composant React
const root = createRoot(document.getElementById('app'));
root.render(
  <div className='bg-gray-950 w-full h-screen flex justify-center items-center'>
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
);
