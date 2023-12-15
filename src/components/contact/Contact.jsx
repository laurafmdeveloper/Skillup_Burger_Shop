// Write all the code here
import Popup from 'reactjs-popup';





export default function Contact(){
    return (

        <form className="contact" action="" method="post">
                
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="user_name" />
                </div>
                <div>
                    <label for="mail">Correo electrónico:</label>
                    <input type="email" id="mail" name="user_mail" />
                </div>
                <div>
                    <label for="msg">Mensaje:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </div>
            

    
            <Popup trigger=
            {<button type="button">Send</button>}
            >
            </ Popup>
            
        </form>
 



    );
};