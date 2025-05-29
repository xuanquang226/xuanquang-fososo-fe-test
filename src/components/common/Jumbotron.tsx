export default function Jumbotron(){
    return(
        <div className={`bg-skyline w-full`}>
            <div className={`flex justify-between w-4/5 py-4 px-2 mx-auto`}>
                <div className={`flex items-center`}>
                    <img className={`w-[48px] h-[48px]`} src="/images/location.png"></img>
                    <h1 className={`text-lg font-medium text-gray-800`}>
                        Xem hệ thống 88 cửa hàng trên toàn quốc
                    </h1>
                </div>
                    <button className={`bg-white font-bold text-blue-600 border border-gray-300 rounded-4xl px-4 py-2
                                hover:bg-gray-100 hover:cursor-pointer flex items-center`}>Xem ngay
                        <img className={`pl-3`} src="/images/direction.png" alt="" />
                    </button>        
            </div>
        </div>
    )
}