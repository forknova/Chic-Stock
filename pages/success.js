import React, {useEffect} from 'react'
import {useStateContext} from "../context/StateContext";
import {BsBagCheckFill} from "react-icons/bs";
import Link from "next/link";
import {runFireworks} from '../lib/utilts'

const Success = () => {
    const {setTotalQuantities, setTotalPrice, setCartItems} = useStateContext()

    useEffect(() => {
        setTotalPrice(0);
        setCartItems([]);
        setTotalQuantities(0)
        runFireworks()

    }, []);


    return (
        <div className='success-wrapper'>
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for your order</h2>
                <p className="email-msg"> Check your email inbox for the receipt.</p>
                <p className="description">
                    If you have any questions ,please email
                    <a className='email' href='mailto:order@example.com'>
                        order@example.com
                    </a>
                </p>
                <Link href='/'>
                    <button className="btn"
                            width="300px" type='button'>
                        Continue shopping
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Success
