import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:3000/api/user/:userId', async(req, res, ctx) => {
        const { userId } = req.params;
        return res(
            ctx.json({
                name: `elther (${userId})`,
            })
        )
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