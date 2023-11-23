export const FooterSection = () => {
    return(
        <>
            <div className="w-full p-3 bg-macaroni/70 max-h-[100px] rounded-tr-xl rounded-tl-xl column items-center text-white">
                <div className="absolute z-10 bg-vector opacity-25 -mt-3 w-[360px] h-fit"></div>
                <a href="wa.me/6285877547692?text=Halo%20Min%20Aku%20Mau%20Bertanya%20%F0%9F%98%8B%0A%0A" className="font-lobster-two font-bold text-2xl pt-3 z-10">MaBa X KalKul</a>
                <div className="column w-full items-center text-xs font-poppins font-light">
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-muted">Copyright &copy;</p>
                        <p className="text-muted">2023</p>
                    </div>
                    <p className="text-muted">
                    All rights reserved. Created by MaBa X KalKul
                    </p>
                </div>
            </div>
        </>
    )
}