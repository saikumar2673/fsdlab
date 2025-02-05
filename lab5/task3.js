const Events=require('events');
const eventEmitter=new Events.EventEmitter();
eventEmitter.on('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old`);
});
eventEmitter.emit('userDetails','sai',20);
