const NavBtn = ({ id }) => {
    return (
        <button
            onClick={() => {
                let element = document.getElementById(id);
                element && element.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, '', ('#' + id));
            }}
            className="text-gray-800 font-bold rounded-lg"
        >
            {id.toUpperCase()}
        </button>
    );
}

const NavBarPages = () => {
    return (
        <>
            <li>
                <NavBtn id='logos'></NavBtn>
            </li>
            <li>
                <NavBtn id='ilustração digital'></NavBtn>
            </li>
            <li>
                <NavBtn id='concept art'></NavBtn>
            </li>
            <li>
                <NavBtn id='social media'></NavBtn>
            </li>
            <li>
                <NavBtn id='tatuagens'></NavBtn>
            </li>
            <li>
                <NavBtn id='retratos'></NavBtn>
            </li>
        </>
    )
};

export default NavBarPages;