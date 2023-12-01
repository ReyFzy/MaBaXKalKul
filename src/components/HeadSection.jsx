export const HeadSection =()=> {
    return (
        <>
            <div className="bg-vector p-1 gap-8 w-full h-[671px] column items-center justify-start">
                <h2 className="font-lobster-two font-bold text-xs italic pt-3">MaBa X KalKul</h2>
                <div className="column gap-4 items-center">
                    <button className="font-poppins btn-head text-sm" disabled>TRY OUR FOOD!</button>
                    <div className="column items-center gap-6">
                        <h1 className="rubik-bold font-extrabold text-center text-4xl h-[120px]">Cobain deh Appetizer & Dessert nya <a href="https://www.instagram.com/rpl2.twotech/" className="font-lobster-two text-macaroni">RPL 2</a></h1>
                        <a href="#menu">
                            <button className="btn-active text-sm rounded">Kepoin Menunya!</button>
                        </a>
                    </div>
                    <iframe src="https://www.instagram.com/reel/C0O1hpLJS4o/embed/" className="frame w-[300px] mt-7" title="MaBa X KalKul"></iframe>
                    
                </div>
            </div>
        </>
    )
} 