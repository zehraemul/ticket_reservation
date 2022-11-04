const container = document.querySelector(".container");
const count = document.getElementById('count');
const amount = document.getElementById("amount");
const seats = document.querySelectorAll('.seat:not(.reserved)');
// const btn = document.querySelector('.btn');

container.addEventListener("click",((event)=>{
   // console.log(event.target);
   
    if(event.target.classList.contains('seat')&&!event.target.classList.contains('reserved')){
        event.target.classList.toggle('selected'); // if the selected class does not exist, it is added, if it is, it is removed (toggle)
        const selectedSeats= container.querySelectorAll('.seat.selected');
        let = selectedCount = container.querySelectorAll('.seat.selected').length;
        const selectedArr=[];
        const seatsArr=[];
        selectedSeats.forEach((seat)=>{
            selectedArr.push(seat);
        });

        seats.forEach((seat)=>{
            seatsArr.push(seat);
        });


        //[1,4,15,89...];
        let seletectedSeatsIndexs= selectedArr.map((seat)=>{
            return seatsArr.indexOf(seat);
        });

        //console.log(seletectedSeatsIndexs);
        count.innerHTML=`${selectedCount}`;
        amount.innerHTML=`${selectedCount*10}` 
        
       //  console.log(seats);
       //  console.log(selectedCount);
       // console.log(selectedSeats);
       saveToLocalStorage(seletectedSeatsIndexs);
    }

    function saveToLocalStorage(indexs){
        localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    }
}));
/*
btn.addEventListener("click",(()=>{
    const selectedSeats= container.querySelectorAll('.seat.selected');
    selectedSeats.classList.add("none");
}));
*/



