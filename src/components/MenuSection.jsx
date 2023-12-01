import { SwitchMenu } from "./SwitchMenu"

export const MenuSection = () => {
    return (
        <>
            <div className="bg-transparent p-14 gap-8 w-full h-[500px] column items-center justify-start mt-10">
            <div className="absolute -z-50 bg-vector w-full h-[400px] -mt-8"></div>
                <h1 className="poppins-bold font-extrabold text-center text-2xl" id="menu">KEPOIN MENU-MENU KAMI DISINI!</h1>
                <SwitchMenu/>
            </div>
        </>
    )
}