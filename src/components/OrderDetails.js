import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {

    const od = useParams();
    const fod = JSON.parse(od.orderDetails)
    const d = new Date(fod.selectedDate)
    const cvv = ['amn khan', 'jamn khan', 'dialw', 'fikl'];
    cvv.forEach(element => {
        if (element.indexOf('a') > -1)
            console.log(element)
    });
    return (
        <>
            <div className="orderDetails-cont flex jc">
                <div className="main-od border">
                    <h1 style={{ textAlign: 'center' }}>Your Order Details</h1><br></br><br></br>
                    <h3>Movie Name : {fod.movieName}</h3><br />
                    <h4>Theater : {fod.theaterId.split(':')}</h4><br />
                    <p>City : {fod.city.toUpperCase()}</p><br />
                    <p>Show Time : {fod.showTime}</p><br />
                    <p>Date : {d.toDateString()}</p><br></br>
                    <p>Seat : {fod.psid[0].split(' ')[2].toUpperCase()} - {fod.psid.sort().map((m, i) => {
                        return <span key={i}>{m.split(' ')[0].toUpperCase()}{m.split(' ')[1]}&nbsp;&nbsp;</span>
                    })}
                    </p><br />
                    <p>(Total tickets : {fod.psid.length})</p><br></br>
                    <p>Amount Paid : Rs {fod.totalTicketsPrice}</p><br></br>

                </div>
            </div>
        </>
    )
}

export default OrderDetails;