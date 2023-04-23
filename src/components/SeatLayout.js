import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SeatLayout = () => {
    const { theaterId, showTime, selectedDate, movieName } = useParams()
    console.log(theaterId, showTime, selectedDate, movieName)
    const city = localStorage.getItem('city')
    const [psid, setPsid] = useState([]);
    const navg = useNavigate();
    const od = {
        theaterId: theaterId,
        showTime: showTime,
        selectedDate: selectedDate,
        movieName: movieName,
        city: city,
        psid: psid
    }
    const sod = JSON.stringify(od)
    var d = new Date(selectedDate);
    var seatArr = []
    for (let i = 0; i < 15; i++)
        seatArr.push(i + 1)

    function bookseat(e) {
        if (e.target.className == 'bookseat' && psid.length < 10) {
            e.target.className = 'active2';
            setPsid([...psid, e.target.id])
        }

        else {
            e.target.className = 'bookseat';
            for (let i = 0; i < psid.length; i++) {
                if (psid[i] === e.target.id)
                    psid.splice(i, 1)
                setPsid([...psid])
            }
        }
    }
    function proceedToPay() {
        navg(`/paymentpage/${psid.length * parseInt(psid[0].split(' ')[3])}/${sod}`)
    }

    return (
        <>
            <div className="setLayout-cont">
                <div className="slmdetails-cont">
                    <h3>Movie : {movieName}</h3><br></br>
                    <p>{theaterId} {city !== null && city.charAt(0).toUpperCase()}{city !== null && city.slice(1)} | {showTime} , {d.toDateString()}</p>
                </div>
                <div className="seatLayout">
                    <div className="seat">
                        <p>VIP - Rs 420.00</p>
                        <div style={{ borderTop: '1px solid grey', marginTop: '20px' }}></div>
                        <div className="flex stl" style={{ marginTop: '20px' }}>
                            <div className="flex jac" style={{ width: '40px', heigth: '30px' }}>A</div>
                            <div id='a' className="flex space-between seatbtn">
                                {seatArr.map((m, i) => {
                                    return <button className="bookseat" onClick={bookseat} key={i} id={'a ' + m + ' vip 420'} >{m}</button>
                                })}
                            </div>
                        </div>

                        <div className="flex stl" style={{ marginTop: '20px' }}>
                            <div className="flex jac" style={{ width: '40px', heigth: '30px' }}>B</div>
                            <div id='b' className="flex space-between seatbtn">
                                {seatArr.map((m, i) => {
                                    return <button className="bookseat" onClick={bookseat} key={i} id={'b ' + m + ' vip 420'}>{m}</button>
                                })}
                            </div>
                        </div>

                        <div className="flex stl" style={{ marginTop: '20px' }}>
                            <div className="flex jac" style={{ width: '40px', heigth: '30px' }}>C</div>
                            <div id='c' className="flex space-between seatbtn">
                                {seatArr.map((m, i) => {
                                    return <button className="bookseat" onClick={bookseat} key={i} id={'c ' + m + ' vip 420'} >{m}</button>
                                })}
                            </div>
                        </div>

                        <div className="flex stl" style={{ marginTop: '20px' }}>
                            <div className="flex jac" style={{ width: '40px', heigth: '30px' }}>D</div>
                            <div id='d' className="flex space-between seatbtn">
                                {seatArr.map((m, i) => {
                                    return <button className="bookseat" onClick={bookseat} key={i} id={'d ' + m + ' vip 420'}>{m}</button>
                                })}
                            </div>
                        </div>

                        <div className="flex stl" style={{ marginTop: '20px' }}>
                            <div className="flex jac" style={{ width: '40px', heigth: '30px' }}>E</div>
                            <div id='e' className="flex space-between seatbtn">
                                {seatArr.map((m, i) => {
                                    return <button className="bookseat" onClick={bookseat} key={i} id={'e ' + m + ' vip 420'}>{m}</button>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="proceedbtn">
                    {psid.length > 0 && <button onClick={proceedToPay} className="prbtn">Proceed to pay - Rs {psid.length * parseInt(psid[0].split(' ')[3])}</button>}
                </div>
            </div>
        </>
    )
}
export default SeatLayout;