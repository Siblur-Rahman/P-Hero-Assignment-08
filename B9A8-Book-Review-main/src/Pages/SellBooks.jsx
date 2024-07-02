
const SellBooks = () => {
    return (
        <div className="">
            <h1 className="text-5xl text-center">Sell Us Your Books</h1>
            <h1 className="text-xl text-red-600 text-center mt-5">Attention online sellers: effective October 10, Powell’s Online Buyback Program will only be issuing payouts through</h1>
            <h1 className="text-xl text-red-600 text-center mt-5">The in-store used book buying counters will continue to offer payouts only in the form of Powell's credit.</h1>
            <div className="text-center mt-5">
            Thank you for your interest in selling your books to Powell's! You can sell your used books and textbooks online or in our stores at the used book buying counters. Start selling your used books today and unlock the value in your personal library!
            </div>
            <div className="grid grid-cols-2 mt-10">
                <div>
                    <h1 className="text-5xl text-center">Sell Books In Store</h1>

                    <p className="text-center mt-5">Our used book buying counters are open with limited hours at all three of our Portland-area locations! Please know that when selling your used books in-store, we offer payment via store credit only (no cash).</p>
                    <ul className="text-center mt-5">
                        <li>Powell's City of Books: fri, sat, sun only from 10am–5pm</li>
                        <li>Powell's Books on Hawthorne: fri, sat, sun only from 10am–5pm</li>
                        <li>Powell's Books at Cedar Hills Crossing: fri, sat, sun only from 10am–5pm</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-5xl text-center">Sell Books Online</h1>

                    <p className="text-center mt-5">Our online bookselling platform offers a hassle-free selling process. Simply scan or enter the ISBNs of the books you wish to sell, receive an instant quote on the titles you’d like to sell, box up your sold books, and drop them off at a UPS store near you. Once your bid is processed, we offer payment through PayPal. Scan the QR code with your phone or click the button below to begin.</p>
                </div>
            </div>
        </div>
    );
};

export default SellBooks;