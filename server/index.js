const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'AC8bb324884f6fe399ceecffae6a6c9b55';
const authToken = '977a751c2f03977bfcc55427aaa9f220'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

//     //_GET Variables


//     //Send Text
client.messages.create({
    body: "Attendtion! your dog is outside",
    to: process.env.TO_NUMBER,  // Text this number
    from: process.env.FROM_NUMBER // From a valid Twilio number
}).then((message) => console.log(message.body))
})

app.listen(4000, () => console.log("Running on Port 4000"))


