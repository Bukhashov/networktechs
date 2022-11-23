import {useLoaderData, Link} from "react-router-dom";


export default function Index(){
    const data = useLoaderData();
    const titles = data.data.titles;
    console.log(titles[0].id);

    return(
        <div className="flex py-2 flex-wrap justify-center">
            {
                titles.map((title) =>
                    <div key={title.id} className="min-w-[250px] min-h-[120px] bg-gray-300 py-2 px-3 m-2 rounded-md">
                        <div className="">
                            <h3 className="text-lg not-italic">{title.title}</h3>
                        </div>
                        <div className="text-xs items-stretch">
                            <Link to={`/lecture/${title.title}`}>Därιsty Qqu</Link>
                        </div>
                    </div>
                   
                )
            }
        </div>
    )
}