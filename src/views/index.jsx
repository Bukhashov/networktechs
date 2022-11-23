import {useLoaderData, Link} from "react-router-dom";


export default function Index(){
    const data = useLoaderData();
    const titles = data.data.titles;
    console.log(titles[0].id);

    return(
        <div className="flex py-6 flex-wrap justify-center">
            {
                titles.map((title) =>
                    <div key={title.id} className="grid min-w-[250px] w-[350px] min-h-[120px] py-2 px-3 m-2 rounded-md bg-gray-300">
                        <div className="flex">
                            <h3 className="text-lg not-italic">{title.title}</h3>
                        </div>
                        <div className="text-xs flex items-stretch justify-end">
                            <Link to={`/lecture/${title.title}`}>Därιsty Qqu</Link>
                        </div>
                    </div>
                   
                )
            }
        </div>
    )
}