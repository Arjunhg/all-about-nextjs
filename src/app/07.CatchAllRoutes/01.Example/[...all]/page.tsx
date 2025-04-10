
const ProjectCathc = async ( { params }: { params: { all: string[] } } ) => {

    const {all} = await params;

    console.log(all);

    return (
        <div>
            Project Catch All

            {
                all.map(item => (
                    <div key={item}>
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCathc;

/*
http://localhost:3000/07.CatchAllRoutes/01.Example/1/2/3/4/5    : [ '1', '2', '3', '4', '5' ]
http://localhost:3000/07.CatchAllRoutes/01.Example/1/hello/3/world/5    : [ '1', 'hello', '3', 'world', '5' ]
*/