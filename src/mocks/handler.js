import { rest } from 'msw'

const todos = [
    { 
        id: `1`,
        title: `elther 1`,
    },
    { 
        id: `2`,
        title: `elther 2`,
    },
    { 
        id: `3`,
        title: `elther 3`,
    },
    { 
        id: `4`,
        title: `elther 4`,
    },
    { 
        id: `5`,
        title: `elther 5`,
    },
    { 
        id: `6`,
        title: `elther 6`,
    },
    { 
        id: `7`,
        title: `elther 7`,
    },
]
export const handlers = [
    rest.get('http://localhost:3000/api/projects', async(req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json({
                projects: [
                { 
                    id: `1 ${pageIndex}`,
                    name: `elther 1-${pageIndex}`,
                },
                { 
                    id: `2 ${pageIndex}`,
                    name: `elther 2-${pageIndex}`,
                },
                { 
                    id: `3 ${pageIndex}`,
                    name: `elther 3-${pageIndex}`,
                },
                { 
                    id: `4 ${pageIndex}`,
                    name: `elther 4-${pageIndex}`,
                },
                { 
                    id: `5 ${pageIndex}`,
                    name: `elther 5-${pageIndex}`,
                },
                { 
                    id: `6 ${pageIndex}`,
                    name: `elther 6-${pageIndex}`,
                },
                { 
                    id: `7 ${pageIndex}`,
                    name: `elther 7-${pageIndex}`,
                },
            ],
            hasMore: pageIndex < 4,
            nextCursor: pageIndex < 4 ? parseInt(pageIndex) + 1 : undefined,
        })
        );
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.get('http://localhost:3000/api/todos', async(req, res, ctx) => {
        return res(
            ctx.json(todos)
        )
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.post('http://localhost:3000/api/todo', async(req, res, ctx) => {
        const {todo} = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo);
        return res(
            ctx.json(true)
        )
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.get('http://localhost:3000/api/users', async(req, res, ctx) => {
        const pageIndex = req.url.searchParams.get('page');
        return res(
            ctx.json([
                { 
                    id: `1`,
                    name: `elther 1`,
                },
                { 
                    id: `2`,
                    name: `elther 2`,
                },
                { 
                    id: `3`,
                    name: `elther 3`,
                },
                { 
                    id: `4`,
                    name: `elther 4`,
                },
                { 
                    id: `5`,
                    name: `elther 5`,
                },
                { 
                    id: `6`,
                    name: `elther 6`,
                },
                { 
                    id: `7`,
                    name: `elther 7`,
                },
            ])
        )
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.get('http://localhost:3000/api/user/:userId', async(req, res, ctx) => {
        const { userId } = req.params;
        return res(
            ctx.json({
                name: `elther (${userId})`,
            })
        )
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.get('http://localhost:3000/api/user-name', async(req, res, ctx) => {
        const id = req.url.searchParams.get("id");

        return res(
            ctx.json({
                name: id === "1" ? "The one" : "The others",
            })
        )
        // return res(
        //     ctx.status(400)
        // );
    }),
    rest.put('http://localhost:3000/counter/increment', async(req, res, ctx) => {
        const { value } = req.body;
        return res(
            ctx.json({
                value : value + 2,
            })
        )
    }),
    rest.get('/login', async(req, res, ctx) => {
        return res(
            ctx.json({
                id: '235235-c32-4234-235235',
                firstName: 'john',
                lastName: 'Maverick',
            })
        )
    }),
    rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async(req, res,ctx) => {
        const originalResponse = await ctx.fetch(req)
        const originalResponseData = await originalResponse.json()
        return res(
            // ctx.json({
            //     "data": {
            //         "people" :
            //         [
            //             ...originalResponseData.data.people,
            //             {
            //                 "name": "jimeeemy",
            //                 "age": 135
            //             },                       
            //         ]
            //     }
            // })
            ctx.status(403),
            ctx.json({
                errorMessage: 'Data not found',
            })
        )
    })
]