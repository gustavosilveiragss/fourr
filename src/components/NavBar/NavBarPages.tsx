import Router from 'next/router';

const NavBarPages = () => {
    return (
        <>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/logos')}>LOGOS</button>
            </li>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/illustration')}>ILUSTRAÇÃO DIGITAL</button>
            </li>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/concept')}>CONCEPT ART</button>
            </li>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/social')}>SOCIAL MEDIA</button>
            </li>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/tattoo')}>TATUAGENS</button>
            </li>
            <li>
                <button className='text-gray-600 rounded-md' type='button' onClick={() => Router.push('/portrait')}>RETRATOS</button>
            </li>
        </>
    )
};

export default NavBarPages;