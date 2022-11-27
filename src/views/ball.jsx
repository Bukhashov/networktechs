export default function Ball(){
    const right = sessionStorage.getItem('numberAnswer');
    const nq = sessionStorage.getItem('numberQuestion');
    const title = sessionStorage.getItem('tasktitle');
    
    const y = Math.floor(right*100)/nq;

    return(
        <div className="flex justify-center py-5">
            <div className="grid mt-9 grid justify-center">
                <div className="flex justify-center py-6 text-3xl">{title}</div>
                <div className="grid justify-center py-6">
                    <div>Siz duris jauab berdiniz: {right}/{nq}</div>
                    <div className="w-96 flex">
                        <div style={{ width: y+"%" }} className={" bg-gray-400 h-2"}></div>
                        <div className="w-full bg-slate-300"></div>
                    </div>
                </div>
            </div>         
        </div>
    )
}