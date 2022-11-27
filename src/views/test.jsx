import { useLoaderData, useNavigate} from 'react-router-dom';
import Test from '../components/Test';
import axios from "axios";

export default function Tests(){
    const data = useLoaderData();
    const navigate = useNavigate();
    const d = data.data;
    const title = d.title;
    const tests = d.data;
    let i = 0;
    
    let arrayAnswers = new Array(tests.length);
    const getValueRadioBtn = (id, answer, question) =>{
        let ObAnswer = {"answer" : answer, "question" : question };
        arrayAnswers[id] = ObAnswer;
    }

    const controlTest = async () => {
        if(arrayAnswers.length == tests.length && arrayAnswers[0] != null){
            await axios.post('http://localhost:4000/api/v1/control/test', {
            title: title,
            data: arrayAnswers
            }).then(function (response) {
                sessionStorage.setItem("numberQuestion", tests.length);
                sessionStorage.setItem("numberAnswer", response.data.resultCount);
                sessionStorage.setItem("tasktitle", title);
                return navigate(`/ball/${title}`);
            }).catch(function (error) {
                console.log(error);
            });
        }        
    }

    return(
            <div className="grid">
                <div className='flex justify-center p-3'><h3 className='text-xl'>{title}</h3></div>
                <div>
                    {
                        tests.map((test)=> <Test getValueRadioBtn={getValueRadioBtn} id={i++} question={test['question']} av1={test['answer1']} av2={test['answer2']} av3={test['answer3']} av4={test['answer4']} /> )
                    }         
                </div>
                <div className="flex justify-center px-10 py-5">
                    <div className="border p-2 cursor-pointer" onClick={controlTest}>Tekseru</div>
                </div>
            </div>
    )
}