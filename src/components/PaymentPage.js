import React, { useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
    const pd = useParams();
    const [upi, setUpi] = useState('')
    const [paymentSuccess, setPs] = useState(false)
    const navg = useNavigate();
    const od = JSON.parse(pd.od);
    od.totalTicketsPrice = pd.pdetails;
    const fod = JSON.stringify(od);
    function pay() {
        if (upi === '' || upi === null) {
            alert('enter upi details')
            return;
        }
        else {
            setPs(true)
            setTimeout(() => {
                navg(`/orderDetails/${fod}`)
            }, 500);
        }
    }
    return (
        <>
            <div className="payment-cont flex jac">
                <div>
                    <div style={{ height: '50px' }}>
                        {paymentSuccess && <p style={{ textAlign: 'center' }}>Payment Succesfull</p>}
                    </div>

                    <div className="pp flex border">
                        <div className="pname">
                            <div className="upi"><h3>UPI</h3></div>
                        </div>
                        <div className="rp flex jac">
                            <div style={{ width: '80%' }}>
                                <div>
                                    <label>Upi Id</label><br /><br />
                                    <input onChange={e => setUpi(e.target.value)} className="pfinput" type="text" placeholder="example@upi" />
                                </div>
                                <button onClick={pay}>Pay Rs {pd.pdetails}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage;