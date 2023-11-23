import { SwitchButton, useState } from "../Exporter"

export const SwitchMenu = () => {
    const kalkul = [
        {
            img: "./img/kalkul.jpg",
            alt: "KalKul",
            produk: "KalKul",
            desc: "Si KalKul dessert-nya orang kul",
            link: "https://api.whatsapp.com/send/?phone=6285877547692&text=Halo%20Min%20aku%20mau%20pesan%20KalKul%20%F0%9F%98%8B%0A%0APesanannya%20atas%20nama%20%3A%20...%0AKan%20rasanya%20ada%20coklat%2C%20tiramisu%20sama%20matcha.%0Aaku%20mau%20pesen%20rasa%20%3A%20...%0AKelas%20aku%20hari%20jumat%20di%20%3A%20...%0Akalo%20bisa%20antar%20jam%20%3A%20...%20ya%20min%0A%0Aterimakasih%20min%20ditunggu%20pesananya%20%F0%9F%98%8B%F0%9F%91%86%F0%9F%8F%BB&type=phone_number&app_absent=0"
        },
    ];
    const maba = [
        {
            img: "./img/maba.jpg",
            alt: "MaBa",
            produk: "MaBa",
            desc: "Si MaBa appetizer-nya mahasiswa italia",
            link: "https://api.whatsapp.com/send/?phone=6285877547692&text=Halo%20Min%20aku%20mau%20pesan%20MaBa%20%F0%9F%98%8B%0A%0APesanannya%20atas%20nama%20%3A%20...%0AKelas%20aku%20hari%20jumat%20di%20%3A%20...%0Akalo%20bisa%20antar%20jam%20%3A%20...%20ya%20min%0A%0Aterimakasih%20min%20ditunggu%20pesananya%20%F0%9F%98%8B%F0%9F%91%86%F0%9F%8F%BB&type=phone_number&app_absent=0"
        },
    ];

    const [Menu, setMenu] = useState("maba");
    const [showedMenu, setShowedMenu] = useState(maba);

    const showMenu = (menu) => {
        if (menu === "maba") {
        setShowedMenu(maba);
        setMenu("maba");
    } else {
        setShowedMenu(kalkul);
        setMenu("kalkul");
    }};
    
    return (
        <>
            <div className="flex p-1 w-fit justify-center gap-1 bg-neutral-200 rounded-3xl">
                <SwitchButton showMenu={showMenu} Menu={Menu} menu={'maba'} text={"Appetizer"}/>
                <SwitchButton showMenu={showMenu} Menu={Menu} menu={'kalkul'} text={"Dessert"}/>
            </div>

            <div className="overflow-x-auto w-full flex">
                <div className="min-w-max flex gap-2 px-5">
                {showedMenu.map((ele, i) => (
                    <div key={i} className="card-head">
                        <img src={ele.img} alt={ele.alt} className="card-96-img" />
                        <div className="card-shade bg-black/25">
                        <div className="column gap-1">
                            <div className="column">
                                <p className="card-title">{ele.produk}</p>
                                <p className="card-desc">{ele.desc}</p>
                            </div>
                            <a href={ele.link}>
                                <button className="btn-card bg-black/40">Aku Mau Pesan ini</button>
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
