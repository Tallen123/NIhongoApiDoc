
const MainButton = ({Value,Onlick}) => {
    return ( 
        <div>
            <button onClick={Onlick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {Value}
            </button>
        </div>
    )
}
export default MainButton