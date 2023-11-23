export const SwitchButton = (props) => {
    return (
        <button type="button" onClick={() => props.showMenu(props.menu)} className={props.Menu === props.menu ? "btn-on rounded-3xl text-sm z-50" : "btn-off rounded-3xl text-sm z-50"}>
            {props.text}
        </button>
    )
}
